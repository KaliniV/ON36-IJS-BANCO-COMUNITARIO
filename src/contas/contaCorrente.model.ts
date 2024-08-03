import { TipoConta } from "src/enums/tipoConta";
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
}
