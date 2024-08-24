import { TipoConta } from "../../enums/tipoConta";
import { Conta } from "./conta.model";

export class ContaCorrente extends Conta {
  constructor(
    id: number,
    titularId: number, // ID do Cliente
    saldo: number,
    public limite: number // limite de cheque especial
  ) {
    super(id, titularId, saldo, TipoConta.CORRENTE);
  }
  sacar(valor: number): boolean {
    if (valor <= this.saldo + this.limite) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}
