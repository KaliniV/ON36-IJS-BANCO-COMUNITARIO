import { Conta } from "../contas/model/conta.model";
import { ContaCorrente } from "../contas//model/contaCorrente.model";
import { ContaPoupanca } from "../contas/model/contaPoupanca.model";
import { TipoConta } from "../enums/tipoConta";
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
