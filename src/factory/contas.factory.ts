import { Conta } from "src/contas/conta.model";
import { ContaCorrente } from "src/contas/contaCorrente.model";
import { ContaPoupanca } from "src/contas/contaPoupanca.model";
import { TipoConta } from "src/enums/tipoConta";
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
