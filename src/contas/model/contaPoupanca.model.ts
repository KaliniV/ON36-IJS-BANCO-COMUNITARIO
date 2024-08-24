import { TipoConta } from "../../enums/tipoConta";
import { Conta } from "./conta.model";

export class ContaPoupanca extends Conta {
  constructor(
    id: number,
    titularId: number, // ID do Cliente
    saldo: number,
    public rendimento: number // taxa de rendimento
  ) {
    super(id, titularId, saldo, TipoConta.POUPANCA);
  }
  aplicarRendimento(): void {
    this.saldo += this.saldo * this.rendimento;
  }
}
