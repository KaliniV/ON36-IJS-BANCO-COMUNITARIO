"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerentesService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
let GerentesService = class GerentesService {
    constructor() {
        this.filePath = path.resolve('src/gerentes/gerentes.json');
    }
    readGerentes() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        }
        catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            }
            else {
                throw error;
            }
        }
    }
    writeGerentes(gerentes) {
        fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
    }
    criarCliente(nome, gerente) {
        const gerentes = this.readGerentes();
        if (!Array.isArray(gerentes)) {
            throw new Error('Os dados do arquivo não são um array.');
        }
        const newGerente = {
            idGerente: gerentes.length > 0 ? gerentes[gerentes.length - 1].idGerente + 1 : 1,
            nome,
            Cliente: [gerente]
        };
        gerentes.push(newGerente);
        this.writeGerentes(gerentes);
        return newGerente;
    }
    findAll() {
        return this.readGerentes();
    }
    modificarCliente(idGerente, idCliente, clienteAtualizado) {
        const gerentes = this.readGerentes();
        const gerente = gerentes.find(g => g.idGerente === idGerente);
        if (!gerente) {
            return null;
        }
        const cliente = gerente.Cliente.find(c => c.id === idCliente);
        if (!cliente) {
            return null;
        }
        Object.assign(cliente, clienteAtualizado);
        this.writeGerentes(gerentes);
        return cliente;
    }
    deletarCliente(idGerente) {
        const gerentes = this.readGerentes();
        const gerenteIndex = gerentes.findIndex(gerente => gerente.idGerente === Number(idGerente));
        gerentes.splice(gerenteIndex, 1);
        this.writeGerentes(gerentes);
    }
};
exports.GerentesService = GerentesService;
exports.GerentesService = GerentesService = __decorate([
    (0, common_1.Injectable)()
], GerentesService);
//# sourceMappingURL=gerentes.service.js.map