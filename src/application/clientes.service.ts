import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ClientesRepository } from "src/adapters/outbound/clientes.repository";
import { Cliente } from "src/domain/cliente/cliente.model";
import { ContasFactory } from "src/domain/conta/contas.factory";
import { Conta } from "src/domain/conta/model/conta.model";
import { TipoConta } from "src/domain/conta/tipoConta";

@Injectable()
export class ClientesService {
  constructor(private readonly clientesRepository: ClientesRepository) {}
  criarCliente(
    nome: string,
    cpf: string,
    endereco: string,
    telefone: string,
    ehGerente: boolean
  ): Cliente {
    const newCliente: Cliente = {
      id: undefined,
      nome,
      cpf,
      endereco,
      telefone,
      contas: [],
    };
    return this.clientesRepository.save(newCliente);
  }

  findById(id: number): Cliente {
    const cliente = this.clientesRepository.findById(id);

    if (!cliente) {
      throw new NotFoundException(`Cliente com o id ${id} não foi encontrado.`);
    }
    return cliente;
 }

  findAll(): Cliente[] {
    return this.clientesRepository.findAll();
  }
  async atualizarCliente(cliente: Cliente): Promise<void> {
    const clientes = this.readClientes();
    const index = clientes.findIndex((c) => c.id === cliente.id);

    if (index === -1) {
      throw new NotFoundException("Cliente não encontrado.");
    }

    // Atualiza os dados do cliente
    clientes[index] = cliente;

    // Grava as alterações de volta no arquivo JSON
    this.writeClientes(clientes);
  }
  modificarCliente(
    id: number,
    nome: string,
    endereco: string,
    telefone: string
  ): Cliente {
    const cliente = this.clientesRepository.findById(id);
    if (!cliente) {
      throw new NotFoundException(`Cliente com o id ${id} não foi encontrado.`);
    }
    cliente.nome = nome;
    cliente.endereco = endereco;
    cliente.telefone = telefone;

    return this.clientesRepository.save(cliente);
  }

  deletarCliente(id: number): void {
    this.clientesRepository.delete(id);
  }

  adicionarConta(
    id: number,
    saldo: number,
    tipo: TipoConta,
    especifico: number
  ): Conta {
    const cliente = this.clientesRepository.findById(id);
    if (!cliente) {
      throw new NotFoundException("Cliente não encontrado.");
    }

    const novaConta: Conta = ContasFactory.CriarConta(
      cliente.contas.length > 0
        ? cliente.contas[cliente.contas.length - 1].id + 1
        : 1,
      cliente.id,
      saldo,
      tipo,
      especifico
    );

    cliente.contas.push(novaConta);
    this.clientesRepository.save(cliente);
    return novaConta;
  }

  transferir(
    origemClienteId: number,
    origemContaId: number,
    destinoClienteId: number,
    destinoContaId: number,
    valor: number
  ): void {
    const origemCliente = this.clientesRepository.findById(origemClienteId);
    const destinoCliente = this.clientesRepository.findById(destinoClienteId);

    if (!origemCliente) {
      throw new NotFoundException("Cliente de origem não encontrado.");
    }

    if (!destinoCliente) {
      throw new NotFoundException("Cliente de destino não encontrado.");
    }

    const origemConta = origemCliente.contas.find(
      (c) => c.id === origemContaId
    );
    const destinoConta = destinoCliente.contas.find(
      (c) => c.id === destinoContaId
    );

    if (!origemConta) {
      throw new NotFoundException("Conta de origem não encontrada.");
    }

    if (!destinoConta) {
      throw new NotFoundException("Conta de destino não encontrada.");
    }

    if (origemConta.saldo < valor) {
      throw new BadRequestException("Saldo insuficiente na conta de origem.");
    }

    origemConta.saldo -= valor;
    destinoConta.saldo += valor;

    this.clientesRepository.save(origemCliente);
    this.clientesRepository.save(destinoCliente);
  }
}
