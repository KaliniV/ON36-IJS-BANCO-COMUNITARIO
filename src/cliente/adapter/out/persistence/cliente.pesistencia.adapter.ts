import path, { join } from 'path';
import { ClienteRepositoryPort } from '../../../application/ports/out/cliente-repository.port';
import { Cliente } from 'src/cliente/domain/models/cliente.entity';
import { promises as fs } from 'fs';
import { ClienteMapeador } from './cliente.mapeador';
import { NotFoundException } from '@nestjs/common';
export class ClientePersistenciaAdapter implements ClienteRepositoryPort {
  private readonly filePath = join(
    __dirname,
    '../../../../../src/cliente/json/banco-cliente.json',
  );

  async salvar(cliente: Cliente): Promise<void> {
    const clientes = await this.lerCliente();
    const clienteIndex = clientes.findIndex((c) => c.id === cliente.id);

    if (clienteIndex > -1) {
      clientes[clienteIndex] = ClienteMapeador.paraPersistence(cliente);
    } else {
      clientes.push(ClienteMapeador.paraPersistence(cliente));
    }
    await fs.writeFile(this.filePath, JSON.stringify(clientes, null, 2));
  }
  async buscarPorId(id: string): Promise<Cliente | null> {
    const clientes = await this.lerCliente();
    const clienteEncontrado = clientes.find((cliente) => cliente.id === id);
    return clienteEncontrado
      ? ClienteMapeador.paraDominio(clienteEncontrado)
      : null;
  }

  async buscarTodos(): Promise<Cliente[]> {
    const clientesPersistidos = await this.lerCliente();
    return clientesPersistidos.map(ClienteMapeador.paraDominio);
  }

  async deletar(id: string): Promise<void> {
    const clientes = await this.lerCliente();
    const clienteIndex = clientes.findIndex((cliente) => cliente.id === id);
    if (clienteIndex === -1) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }
    clientes.splice(clienteIndex, 1);
    await fs.writeFile(this.filePath, JSON.stringify(clientes, null, 2));
  }

  private async lerCliente(): Promise<any[]> {
    try {
      const dados = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(dados) as any[];
    } catch (error) {
      return [];
    }
  }
}
