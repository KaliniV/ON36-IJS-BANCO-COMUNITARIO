import { Gerente } from 'src/gerente/domain/models/gerente.entity';

export abstract class GerenteRepositoryPort {
  abstract salvar(gerente: Gerente): Promise<void>;
  abstract buscarPorId(idGerente: string): Promise<Gerente | null>;
  abstract deletar(idGerente: string): Promise<void>;
}
