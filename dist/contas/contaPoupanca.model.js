"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const tipoConta_1 = require("../enums/tipoConta");
const conta_model_1 = require("./conta.model");
class ContaPoupanca extends conta_model_1.Conta {
    constructor(id, titularId, saldo, rendimento) {
        super(id, titularId, saldo, tipoConta_1.TipoConta.POUPANCA);
    }
}
exports.ContaPoupanca = ContaPoupanca;
//# sourceMappingURL=contaPoupanca.model.js.map