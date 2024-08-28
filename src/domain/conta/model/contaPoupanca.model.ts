import { TipoConta } from "../tipoConta";
import { Conta } from "./conta.model";

export class ContaPoupanca extends Conta {
  constructor(
    id: number,
    titularId: number, // ID do Cliente
    saldo: number,
    rendimento: number // taxa de rendimento
  ) {
    super(id, titularId, saldo, TipoConta.POUPANCA);
  }
}
