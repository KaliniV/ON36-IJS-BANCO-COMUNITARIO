"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const path = require("path");
const fs = require("fs");
const contas_factory_1 = require("../factory/contas.factory");
let ClientesService = class ClientesService {
    constructor() {
        this.filePath = path.resolve("src/clientes/clientes.json");
        this.idContador = 1;
    }
    readClientes() {
        const data = fs.readFileSync(this.filePath, "utf8");
        return JSON.parse(data);
    }
    writeClientes(clientes) {
        fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), "utf8");
    }
    criarCliente(nome, cpf, endereco, telefone, ehGerente) {
        const clientes = this.readClientes();
        const newCliente = {
            id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
            nome,
            cpf,
            endereco,
            telefone,
            contas: [],
        };
        clientes.push(newCliente);
        this.writeClientes(clientes);
        return newCliente;
    }
    findById(id) {
        const clientes = this.readClientes();
        const cliente = clientes.find((cliente) => cliente.id === Number(id));
        if (!cliente) {
            console.log(`Cliente com o id  ${id} não foi encontrada.`);
        }
        return cliente;
    }
    findAll() {
        return this.readClientes();
    }
    modificarCliente(id, nome, endereco, telefone) {
        const clientes = this.readClientes();
        const cliente = clientes.find((cliente) => cliente.id === Number(id));
        cliente.nome = nome;
        cliente.endereco = endereco;
        cliente.telefone = telefone;
        this.writeClientes(clientes);
        return cliente;
    }
    deletarCliente(id) {
        const clientes = this.readClientes();
        const clienteIndex = clientes.findIndex((cliente) => cliente.id === Number(id));
        clientes.splice(clienteIndex, 1);
        this.writeClientes(clientes);
    }
    adicionarConta(id, saldo, tipo, especifico) {
        const clientes = this.readClientes();
        const cliente = clientes.find((c) => c.id === id);
        if (!cliente) {
            throw new common_1.NotFoundException("Cliente não encontrado.");
        }
        const novaConta = contas_factory_1.ContasFactory.CriarConta(cliente.contas.length > 0
            ? cliente.contas[cliente.contas.length - 1].id + 1
            : 1, cliente.id, saldo, tipo, especifico);
        cliente.contas.push(novaConta);
        this.writeClientes(clientes);
        return novaConta;
    }
    transferir(origemClienteId, origemContaId, destinoClienteId, destinoContaId, valor) {
        const clientes = this.readClientes();
        const origemCliente = clientes.find((c) => c.id === origemClienteId);
        const destinoCliente = clientes.find((c) => c.id === destinoClienteId);
        if (!origemCliente) {
            throw new common_1.NotFoundException("Cliente de origem não encontrado.");
        }
        if (!destinoCliente) {
            throw new common_1.NotFoundException("Cliente de destino não encontrado.");
        }
        const origemConta = origemCliente.contas.find((c) => c.id === origemContaId);
        const destinoConta = destinoCliente.contas.find((c) => c.id === destinoContaId);
        if (!origemConta) {
            throw new common_1.NotFoundException("Conta de origem não encontrada.");
        }
        if (!destinoConta) {
            throw new common_1.NotFoundException("Conta de destino não encontrada.");
        }
        if (origemConta.saldo < valor) {
            throw new common_1.BadRequestException("Saldo insuficiente na conta de origem.");
        }
        origemConta.saldo -= valor;
        destinoConta.saldo += valor;
        this.writeClientes(clientes);
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)()
], ClientesService);
//# sourceMappingURL=clientes.service.js.map