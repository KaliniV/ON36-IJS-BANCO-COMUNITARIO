"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(cliente, saldoInicial) {
        this.saldoChequeEspecial = 100;
        this.taxa = 1.0;
        this.saldoInicial = saldoInicial;
        this.cliente = cliente;
    }
    get SaldoInicial() {
        return this.saldoInicial;
    }
    sacarPoupanca() {
        this.saldoInicial += this.saldoInicial * this.taxa;
    }
    sacarCorrente(valorSaque) {
        if (this.saldoInicial + this.saldoChequeEspecial >= valorSaque) {
            this.saldoInicial = this.saldoInicial - valorSaque;
        }
    }
    depositar(valorDeposito) {
        this.saldoInicial = this.saldoInicial + valorDeposito;
    }
    transferir(valor, contaDestino) {
        if (this.saldoInicial >= valor) {
            this.saldoInicial -= valor;
            contaDestino.depositar(valor);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map