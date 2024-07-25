import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.model';

import * as path from 'path';
import * as fs from 'fs';
import { Cliente } from 'src/clientes/cliente.model';




@Injectable()
export class GerentesService {
    private readonly filePath = path.resolve('src/gerentes/gerentes.json');

    private readGerentes(): Gerente[] {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data) as Gerente[];
        } catch (error) {
            if (error.code === 'ENOENT') {
                // Se o arquivo não existir, retorne um array vazio
                return [];
            } else {
                throw error;
            }
        }
    }

    private writeGerentes(gerentes: Gerente[]): void {
        fs.writeFileSync(this.filePath, JSON.stringify(gerentes, null, 2), 'utf8');
    }

    criarCliente(nome: string, gerente: Cliente): Gerente {
        const gerentes = this.readGerentes();
        if (!Array.isArray(gerentes)) {
            throw new Error('Os dados do arquivo não são um array.');
        }
        const newGerente: Gerente = {
            idGerente: gerentes.length > 0 ? gerentes[gerentes.length - 1].idGerente + 1 : 1,
            nome,
            Cliente: [gerente]
        };
        gerentes.push(newGerente);
        this.writeGerentes(gerentes);
        return newGerente;
    }
    findAll(): Gerente[] {
        return this.readGerentes();
    }

    modificarCliente(idGerente: number, idCliente: number, clienteAtualizado: Partial<Cliente>): Cliente | null {
        const gerentes = this.readGerentes();
        const gerente = gerentes.find(g => g.idGerente === idGerente);
        if (!gerente) {
            return null;
        }
        const cliente = gerente.Cliente.find(c => c.id === idCliente);
        if (!cliente) {
            return null;
        }
        // Atualiza os dados do cliente
        Object.assign(cliente, clienteAtualizado);
        this.writeGerentes(gerentes);
        return cliente;
    }
    deletarCliente(idGerente: number): void {
        const gerentes = this.readGerentes();
        const gerenteIndex = gerentes.findIndex(gerente => gerente.idGerente === Number(idGerente));
        gerentes.splice(gerenteIndex, 1)
        this.writeGerentes(gerentes)
    }
}
