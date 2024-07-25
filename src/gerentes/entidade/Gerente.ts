import { Cliente } from "src/clientes/cliente.model";
import { Conta } from "src/contas/entidade/Conta";

export class Gerente {
    private id: number;
    private nome: string;
    private cpf: string;
    private endereco: string;
    private telefone: string;
    private idGerente: string;
    private cliente: Cliente[];
    private conta: Conta[];



    constructor(cliente: Cliente, conta: Conta, idGerente: string) {
        this.cliente.push(cliente);
        this.conta.push(conta);
        this.idGerente = idGerente;
    }



}