import { Conta } from "../../contas/entidade/Conta";
import { Gerente } from "src/gerentes/entidade/Gerente";
export declare class Cliente {
    private id;
    private nome;
    private cpf;
    private endereco;
    private telefone;
    private conta;
    private gerente;
    constructor(conta: Conta, gerente: Gerente);
}
