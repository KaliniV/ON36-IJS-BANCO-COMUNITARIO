import { Cliente } from "src/clientes/cliente.model";
import { Conta } from "src/contas/entidade/Conta";
export declare class Gerente {
    private id;
    private nome;
    private cpf;
    private endereco;
    private telefone;
    private idGerente;
    private cliente;
    private conta;
    constructor(cliente: Cliente, conta: Conta, idGerente: string);
}
