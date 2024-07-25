import { Cliente } from "src/clientes/cliente.model";
import { Conta } from "src/contas/conta.model";

export class Gerente {

    constructor(
        public idGerente: number,
        public nome: string,
        public Cliente: Cliente[]

    ) {

    }
}