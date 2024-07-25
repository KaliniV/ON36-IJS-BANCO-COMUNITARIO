import { Cliente } from "src/clientes/cliente.model";
export declare class Gerente {
    idGerente: number;
    nome: string;
    Cliente: Cliente[];
    constructor(idGerente: number, nome: string, Cliente: Cliente[]);
}
