"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente = /** @class */ (function () {
    function cliente(nome, id, endereco, telefone, cpf) {
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    }
    cliente.prototype.getNome = function () {
        return this.nome;
    };
    cliente.prototype.getId = function () {
        return this.id;
    };
    cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    cliente.prototype.getCpf = function () {
        return this.cpf;
    };
    return cliente;
}());
exports.cliente = cliente;
