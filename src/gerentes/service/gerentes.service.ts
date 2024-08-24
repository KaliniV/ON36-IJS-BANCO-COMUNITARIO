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

  async transferir(
    origemClienteId: number,
    origemContaId: number,
    destinoClienteId: number,
    destinoContaId: number,
    valor: number,
    ehGerente: boolean
  ): Promise<string> {
    if (!ehGerente) {
      return "Acesso negado: você não tem permissões de gerente.";
    }

    if (valor <= 0) {
      return "Valor da transferência deve ser positivo.";
    }

    try {
      // Obtém os dados dos clientes e contas
      const origemCliente =
        await this.clientesService.findById(origemClienteId);
      const destinoCliente =
        await this.clientesService.findById(destinoClienteId);

      if (!origemCliente || !destinoCliente) {
        return "Cliente(s) não encontrado(s).";
      }

      const origemConta = origemCliente.contas.find(
        (c) => c.id === origemContaId
      );
      const destinoConta = destinoCliente.contas.find(
        (c) => c.id === destinoContaId
      );

      if (!origemConta || !destinoConta) {
        return "Conta(s) não encontrada(s).";
      }

      if (origemConta.saldo < valor) {
        return "Saldo insuficiente na conta de origem.";
      }

      // Realiza a transferência
      origemConta.saldo -= valor;
      destinoConta.saldo += valor;

      // Atualiza os dados dos clientes
      await this.clientesService.atualizarCliente(origemCliente);
      await this.clientesService.atualizarCliente(destinoCliente);

      return "Transferência realizada com sucesso.";
    } catch (error) {
      return `Erro ao realizar a transferência: ${error.message}`;
    }
  }
}
