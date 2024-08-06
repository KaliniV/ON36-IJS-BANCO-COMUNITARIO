import { Injectable } from "@nestjs/common";
import { Cliente } from "src/clientes/model/cliente.model";
import { ClientesService } from "src/clientes/service/clientes.service";
import { Conta } from "src/contas/model/conta.model";
import { TipoConta } from "src/enums/tipoConta";

@Injectable()
export class GerentesService {
  constructor(private readonly clientesService: ClientesService) {}

  criarCliente(
    nome: string,
    cpf: string,
    endereco: string,
    telefone: string,
    ehGerente: boolean
  ): Cliente | string {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }
    return this.clientesService.criarCliente(
      nome,
      cpf,
      endereco,
      telefone,
      ehGerente
    );
  }

  findAll(ehGerente: boolean): Cliente[] | string {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }
    return this.clientesService.findAll();
  }

  findById(id: number, ehGerente: boolean) {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }
    return this.clientesService.findById(id);
  }

  modificarCliente(
    id: number,
    nome: string,
    endereco: string,
    telefone: string,
    ehGerente: boolean
  ): Cliente | string {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }
    return this.clientesService.modificarCliente(id, nome, endereco, telefone);
  }

  deletarCliente(id: number, ehGerente: boolean): string {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }

    try {
      this.clientesService.deletarCliente(id);
      return "Cliente deletado com sucesso.";
    } catch (error) {
      return error.message;
    }
  }

  adicionarConta(
    id: number,
    saldo: number,
    tipo: TipoConta,
    especifico: number,
    ehGerente: boolean
  ): Conta | string {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }

    return this.clientesService.adicionarConta(id, saldo, tipo, especifico);
  }
}
