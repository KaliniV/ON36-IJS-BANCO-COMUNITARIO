import { promises as fs } from 'fs';
import path, { join } from 'path';
import { GerenteRepositoryPort } from 'src/gerente/application/ports/out/gerente-repository.port';
import { Gerente } from 'src/gerente/domain/models/gerente.entity';
import { GerenteMapeador } from './gerente.mapeador';

export class GerentePersistenciaAdapter implements GerenteRepositoryPort {
  private readonly filePath = join(
    __dirname,
    '../../../../../src/gerente/json/banco-gerente.json',
  );

  async salvar(gerente: Gerente): Promise<void> {
    const gerentes = await this.lerGerente();
    const gerenteIndex = gerentes.findIndex(
      (g) => g.idGerente === gerente.idGerente,
    );

    if (gerenteIndex > -1) {
      gerentes[gerenteIndex] = GerenteMapeador.paraPersistence(gerente);
    } else {
      gerentes.push(GerenteMapeador.paraPersistence(gerente));
    }
    await fs.writeFile(this.filePath, JSON.stringify(gerentes, null, 2));
  }

  async buscarPorId(idGerente: string): Promise<Gerente | null> {
    const gerentes = await this.lerGerente();
    const gerenteEncontrado = gerentes.find(
      (gerente) => gerente.idGerente === idGerente,
    );
    return gerenteEncontrado
      ? GerenteMapeador.paraDominio(gerenteEncontrado)
      : null;
  }

  buscarTodos(): Promise<Gerente[]> {
    throw new Error('Method not implemented.');
  }
  deletar(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private async lerGerente(): Promise<any[]> {
    try {
      const dados = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(dados) as any[];
    } catch (error) {
      return [];
    }
  }
}
