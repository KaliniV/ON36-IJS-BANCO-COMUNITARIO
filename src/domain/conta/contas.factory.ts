import { Conta } from "src/domain/conta/model/conta.model";
import { ContaCorrente } from "src/domain/conta/model/contaCorrente.model";
import { TipoConta } from "./tipoConta";
import { ContaPoupanca } from "./model/contaPoupanca.model";

export class ContasFactory {
  static CriarConta(
    id: number,
    titularId: number, // ID do Cliente
    saldo: number,
    tipo: TipoConta,
    especifico: number
  ): Conta {
    if (tipo === TipoConta.POUPANCA) {
      return new ContaPoupanca(id, titularId, saldo, especifico);
    } else if (tipo === TipoConta.CORRENTE) {
      return new ContaCorrente(id, titularId, saldo, especifico);
    }
    throw new Error("Tipo de conta não existe");
  }
}
