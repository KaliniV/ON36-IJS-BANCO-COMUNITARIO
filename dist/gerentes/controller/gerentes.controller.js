"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerentesController = void 0;
const common_1 = require("@nestjs/common");
const gerentes_service_1 = require("../service/gerentes.service");
const tipoConta_1 = require("../../enums/tipoConta");
let GerentesController = class GerentesController {
    constructor(gerentesService) {
        this.gerentesService = gerentesService;
    }
    criarCliente(nome, cpf, endereco, telefone, ehGerente) {
        return this.gerentesService.criarCliente(nome, cpf, endereco, telefone, ehGerente);
    }
    findById(id, ehGerente) {
        return this.gerentesService.findById(id, ehGerente);
    }
    findAll(ehGerente) {
        return this.gerentesService.findAll(ehGerente);
    }
    modificarCliente(id, newNome, newEndereco, newTelefone, ehGerente) {
        return this.gerentesService.modificarCliente(id, newNome, newEndereco, newTelefone, ehGerente);
    }
    deletarCliente(id, ehGerente) {
        return this.gerentesService.deletarCliente(id, ehGerente);
    }
    adicionarConta(id, saldo, tipo, especifico, ehGerente) {
        return this.gerentesService.adicionarConta(id, saldo, tipo, especifico, ehGerente);
    }
};
exports.GerentesController = GerentesController;
__decorate([
    (0, common_1.Post)("cliente"),
    __param(0, (0, common_1.Body)("nome")),
    __param(1, (0, common_1.Body)("cpf")),
    __param(2, (0, common_1.Body)("endereco")),
    __param(3, (0, common_1.Body)("telefone")),
    __param(4, (0, common_1.Body)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Boolean]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "criarCliente", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Object)
], GerentesController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(":id/modificacao"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("nome")),
    __param(2, (0, common_1.Body)("endereco")),
    __param(3, (0, common_1.Body)("telefone")),
    __param(4, (0, common_1.Query)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Boolean]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "modificarCliente", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], GerentesController.prototype, "deletarCliente", null);
__decorate([
    (0, common_1.Post)(":id/adicionar-conta"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("saldo")),
    __param(2, (0, common_1.Body)("tipo")),
    __param(3, (0, common_1.Body)("especifico")),
    __param(4, (0, common_1.Body)("ehGerente")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number, Boolean]),
    __metadata("design:returntype", Object)
], GerentesController.prototype, "adicionarConta", null);
exports.GerentesController = GerentesController = __decorate([
    (0, common_1.Controller)("gerentes"),
    __metadata("design:paramtypes", [gerentes_service_1.GerentesService])
], GerentesController);
//# sourceMappingURL=gerentes.controller.js.map