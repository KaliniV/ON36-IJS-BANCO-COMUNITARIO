import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.model';
import { Conta } from '../contas/conta.model';
import * as path from 'path';
import * as fs from 'fs';



@Injectable()
export class ClientesService {
    private readonly filePath = path.resolve('src/clientes/clientes.json');
    private idContador = 1;

    private readClientes(): Cliente[] {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data) as Cliente[];
    }

    private writeClientes(clientes: Cliente[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
    }

    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, conta: Conta): Cliente {
        const clientes = this.readClientes();
        const newCliente: Cliente = {
            id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
            nome,
            cpf,
            endereco,
            telefone,
            Conta: [conta]
        };
        clientes.push(newCliente);
        this.writeClientes(clientes);
        return newCliente;
    }

    findById(id: number): Cliente {
        const clientes = this.readClientes();
        const cliente = clientes.find(cliente => cliente.id === Number(id));

        if (!cliente) {
            console.log(`Cliente com o id  ${id} não foi encontrada.`)
        }
        return cliente;


    }

    modificarConta(id: number, newNome: string, NewEndereco: string, NewTelefone: string): Cliente {
        const clientes = this.readClientes();
        const cliente = clientes.find(cliente => cliente.id === Number(id));
        cliente.nome = newNome;
        cliente.endereco = NewEndereco;
        cliente.telefone = NewTelefone;

        this.writeClientes(clientes);
        return cliente;
    }
    deletarCliente(id: number): void {
        const clientes = this.readClientes();
        const clienteIndex = clientes.findIndex(cliente => cliente.id === Number(id));
        clientes.splice(clienteIndex, 1)
        this.writeClientes(clientes)
    }
}
