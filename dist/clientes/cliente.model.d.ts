import { Conta } from '../contas/conta.model';
export declare class Cliente {
    id: number;
    nome: string;
    cpf: string;
    endereco: string;
    telefone: string;
    Conta: Conta[];
    constructor(id: number, nome: string, cpf: string, endereco: string, telefone: string, Conta: Conta[]);
}
