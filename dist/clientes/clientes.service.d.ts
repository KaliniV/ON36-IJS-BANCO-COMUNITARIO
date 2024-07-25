import { Cliente } from './cliente.model';
import { Conta } from '../contas/conta.model';
export declare class ClientesService {
    private readonly filePath;
    private idContador;
    private readClientes;
    private writeClientes;
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, conta: Conta): Cliente;
    findById(id: number): Cliente;
    modificarConta(id: number, newNome: string, NewEndereco: string, NewTelefone: string): Cliente;
    deletarCliente(id: number): void;
}
