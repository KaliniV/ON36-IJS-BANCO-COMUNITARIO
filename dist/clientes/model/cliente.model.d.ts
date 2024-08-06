import { Conta } from "../../contas/model/conta.model";
export declare class Cliente {
    id: number;
    nome: string;
    cpf: string;
    endereco: string;
    telefone: string;
    contas: Conta[];
    constructor(id: number, nome: string, cpf: string, endereco: string, telefone: string, contas: Conta[]);
}
