
import { Conta } from "../../contas/entidade/Conta";
import { Gerente } from "src/gerentes/entidade/Gerente";
export class Cliente {

    private id: number;
    private nome: string;
    private cpf: string;
    private endereco: string;
    private telefone: string;
    private conta: Conta[];
    private gerente: Gerente;


    constructor(conta: Conta, gerente: Gerente) {
        this.conta.push(conta);
        this.gerente = gerente;
    }



}