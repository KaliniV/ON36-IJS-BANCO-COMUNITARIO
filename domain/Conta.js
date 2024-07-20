"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conta = /** @class */ (function () {
    function Conta(saldoInicial, cliente, agencia) {
        this.clienteId = null;
        this.saldoChequeEspecial = 100;
        this.saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }
    Object.defineProperty(Conta.prototype, "Saldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "SaldoChequeEspecial", {
        get: function () {
            return this.saldo;
        },
        enumerable: true,
        configurable: true
    });
    Conta.prototype.sacarCorrente = function (valor) {
        var total = this.saldo + this.saldoChequeEspecial;
        var valorSacado = valor;
        if (total >= valorSacado) {
            total -= valorSacado;
            return valorSacado;
        }
    };
    Conta.prototype.sacarPoupanca = function (valor) {
        var valorSacado = valor * 1.2;
        if (this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
            return valorSacado;
        }
    };
    Conta.prototype.depositar = function (valor) {
        if (valor <= 0)
            return;
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.transferir = function (valor, contaDestino) {
        // Verifica se há saldo suficiente na conta atual para transferência
        if (this.saldo >= valor) {
            // Realiza a transferência deduzindo da conta atual e adicionando na conta de destino
            this.saldo -= valor;
            contaDestino.depositar(valor);
            return true; // Transferência bem-sucedida
        }
        else {
            // Caso não haja saldo suficiente, a transferência não é realizada
            return false; // Transferência mal-sucedida
        }
    };
    return Conta;
}());
exports.Conta = Conta;
