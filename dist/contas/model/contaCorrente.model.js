"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const tipoConta_1 = require("../../enums/tipoConta");
const conta_model_1 = require("./conta.model");
class ContaCorrente extends conta_model_1.Conta {
    constructor(id, titularId, saldo, limite) {
        super(id, titularId, saldo, tipoConta_1.TipoConta.CORRENTE);
        this.limite = limite;
    }
}
exports.ContaCorrente = ContaCorrente;
//# sourceMappingURL=contaCorrente.model.js.map