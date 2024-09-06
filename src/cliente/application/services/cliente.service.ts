import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { CriarClienteComando } from '../ports/in/criar-cliente.comando';
import { Cliente } from 'src/cliente/domain/models/cliente.entity';
import { v4 as uuidv4 } from 'uuid';

import { ClienteRepositoryPort } from '../ports/out/cliente-repository.port';
import { obterClienteConsulta } from '../ports/in/obter-cliente.consulta';
@Injectable()
export class ClienteService {
  constructor(
    @Inject('ClienteRepositoryPort')
    private readonly clienteRepository: ClienteRepositoryPort,
  ) {}

  criar(comando: CriarClienteComando) {
    const cliente = new Cliente(
      uuidv4(),
      comando.nome,
      comando.cpf,
      comando.idade,
      comando.endereco,
      comando.telefone,
      comando.conta,
    );

    return this.clienteRepository.salvar(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.buscarTodos();
  }

  async findOne(consultar: obterClienteConsulta): Promise<Cliente | null> {
    return await this.clienteRepository.buscarPorId(consultar.id);
  }

  async deletar(id: string): Promise<void> {
    const clienteExistente = await this.clienteRepository.buscarPorId(id);
    if (!clienteExistente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }
    await this.clienteRepository.deletar(id);
  }
  async atualizar(id: string, dados: Partial<Cliente>): Promise<void> {
    const clienteExistente = await this.clienteRepository.buscarPorId(id);
    if (!clienteExistente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }

    // Atualiza os dados do cliente existente
    const clienteAtualizado = new Cliente(
      id,
      dados.nome ?? clienteExistente.nome,
      dados.cpf ?? clienteExistente.cpf,
      dados.idade ?? clienteExistente.idade,
      dados.endereco ?? clienteExistente.endereco,
      dados.telefone ?? clienteExistente.telefone,
      dados.contas ?? clienteExistente.contas,
    );

    await this.clienteRepository.salvar(clienteAtualizado);
  }
}
