import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Cliente } from "./cliente.model";
import { Conta } from "../contas/conta.model";
import * as path from "path";
import * as fs from "fs";
import { ContaPoupanca } from "src/contas/contaPoupanca.model";
import { ContaCorrente } from "src/contas/contaCorrente.model";
import { TipoConta } from "src/enums/tipoConta";
import { ContasFactory } from "../factory/contas.factory";

@Injectable()
export class ClientesService {
  private readonly filePath = path.resolve("src/clientes/clientes.json");
  private idContador = 1;

  private readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data) as Cliente[];
  }

  private writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), "utf8");
  }

  criarCliente(
    nome: string,
    cpf: string,
    endereco: string,
    telefone: string,
    ehGerente: boolean
  ): Cliente {
    const clientes = this.readClientes();
    const newCliente: Cliente = {
      id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
      nome,
      cpf,
      endereco,
      telefone,
      contas: [],
    };

    clientes.push(newCliente);
    this.writeClientes(clientes);
    return newCliente;
  }

  findById(id: number): Cliente {
    const clientes = this.readClientes();
    const cliente = clientes.find((cliente) => cliente.id === Number(id));

    if (!cliente) {
      console.log(`Cliente com o id  ${id} não foi encontrada.`);
    }
    return cliente;
  }

  findAll(): Cliente[] {
    return this.readClientes();
  }

  modificarCliente(
    id: number,
    nome: string,
    endereco: string,
    telefone: string
  ): Cliente {
    const clientes = this.readClientes();
    const cliente = clientes.find((cliente) => cliente.id === Number(id));
    cliente.nome = nome;
    cliente.endereco = endereco;
    cliente.telefone = telefone;

    this.writeClientes(clientes);
    return cliente;
  }

  deletarCliente(id: number): void {
    const clientes = this.readClientes();
    const clienteIndex = clientes.findIndex(
      (cliente) => cliente.id === Number(id)
    );
    clientes.splice(clienteIndex, 1);
    this.writeClientes(clientes);
  }

  adicionarConta(
    id: number,
    saldo: number,
    tipo: TipoConta,
    especifico: number
  ): Conta {
    const clientes = this.readClientes();
    const cliente = clientes.find((c) => c.id === id);
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
    this.writeClientes(clientes);
    return novaConta;
  }
  transferir(
    origemClienteId: number,
    origemContaId: number,
    destinoClienteId: number,
    destinoContaId: number,
    valor: number
  ): void {
    const clientes = this.readClientes();

    const origemCliente = clientes.find((c) => c.id === origemClienteId);
    const destinoCliente = clientes.find((c) => c.id === destinoClienteId);

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

    this.writeClientes(clientes);
  }
}
