import { Cliente } from "../../clientes/entidade/Cliente";

export abstract class Conta {

    private cliente: Cliente;
    public saldoInicial: number;
    private saldoChequeEspecial: number = 100;
    private taxa: number = 1.0;


    constructor(cliente: Cliente, saldoInicial: number) {
        this.saldoInicial = saldoInicial;
        this.cliente = cliente;
    }
    public get SaldoInicial(): number {
        return this.saldoInicial;
    }

    sacarPoupanca() {
        this.saldoInicial += this.saldoInicial * this.taxa;
    }
    sacarCorrente(valorSaque: number) {
        if (this.saldoInicial + this.saldoChequeEspecial >= valorSaque) {
            this.saldoInicial = this.saldoInicial - valorSaque;
        }
    }

    depositar(valorDeposito: number) {
        this.saldoInicial = this.saldoInicial + valorDeposito;
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (this.saldoInicial >= valor) {

            this.saldoInicial -= valor;
            contaDestino.depositar(valor);
            return true; // Transferência bem-sucedida
        } else {
            return false; // Transferência mal-sucedida
        }
    }
}