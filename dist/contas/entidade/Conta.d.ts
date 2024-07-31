import { Cliente } from "../../clientes/entidade/Cliente";
export declare abstract class Conta {
    private cliente;
    saldoInicial: number;
    private saldoChequeEspecial;
    private taxa;
    constructor(cliente: Cliente, saldoInicial: number);
    get SaldoInicial(): number;
    sacarPoupanca(): void;
    sacarCorrente(valorSaque: number): void;
    depositar(valorDeposito: number): void;
    transferir(valor: number, contaDestino: Conta): boolean;
}
