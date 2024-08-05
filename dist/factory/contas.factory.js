"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContasFactory = void 0;
const contaCorrente_model_1 = require("../contas/model/contaCorrente.model");
const contaPoupanca_model_1 = require("../contas/model/contaPoupanca.model");
const tipoConta_1 = require("../enums/tipoConta");
class ContasFactory {
    static CriarConta(id, titularId, saldo, tipo, especifico) {
        if (tipo === tipoConta_1.TipoConta.POUPANCA) {
            return new contaPoupanca_model_1.ContaPoupanca(id, titularId, saldo, especifico);
        }
        else if (tipo === tipoConta_1.TipoConta.CORRENTE) {
            return new contaCorrente_model_1.ContaCorrente(id, titularId, saldo, especifico);
        }
        throw new Error("Tipo de conta não existe");
    }
}
exports.ContasFactory = ContasFactory;
//# sourceMappingURL=contas.factory.js.map