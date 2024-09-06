import { Inject, Injectable } from '@nestjs/common';
import { ClienteRepositoryPort } from 'src/cliente/application/ports/out/cliente-repository.port';
import { CriarContaDto } from 'src/conta/adapter/in/web/dto/criar-conta.dto';
import { ContasFactory } from 'src/conta/domain/factories/contas.factory';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ContaService {
  constructor(
    @Inject('ClienteRepositoryPort')
    private readonly clienteRepository: ClienteRepositoryPort,
  ) {}
  async criar(criarContaDto: CriarContaDto): Promise<void> {
    const cliente = await this.clienteRepository.buscarPorId(
      String(criarContaDto.titularId),
    );

    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }

    if (!cliente.contas) {
      cliente.contas = [];
    }

    const novaConta = ContasFactory.CriarConta(
      uuidv4(),
      criarContaDto.titularId,
      criarContaDto.saldo,
      criarContaDto.tipo,
      100,
    );

    cliente.contas.push(novaConta);

    await this.clienteRepository.atualizarCliente(cliente);
  }
}
