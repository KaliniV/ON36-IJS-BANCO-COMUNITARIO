import { TipoConta } from "../tipoConta";

export class Conta {
  constructor(
    public id: number,
    public titularId: number, // ID do Cliente
    public saldo: number,
    public tipo: TipoConta
  ) {}
}
