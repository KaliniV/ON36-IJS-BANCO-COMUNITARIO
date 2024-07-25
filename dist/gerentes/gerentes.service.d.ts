import { Gerente } from './gerente.model';
import { Cliente } from 'src/clientes/cliente.model';
export declare class GerentesService {
    private readonly filePath;
    private readGerentes;
    private writeGerentes;
    criarCliente(nome: string, gerente: Cliente): Gerente;
    findAll(): Gerente[];
    modificarCliente(idGerente: number, idCliente: number, clienteAtualizado: Partial<Cliente>): Cliente | null;
    deletarCliente(idGerente: number): void;
}
