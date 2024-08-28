import { Cliente } from "../cliente/cliente.model";
export class Gerente {
  constructor(
    public idGerente: number,
    public nome: string,
    public Cliente: Cliente[]
  ) {}
}
