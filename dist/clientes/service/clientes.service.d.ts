import { Cliente } from "../model/cliente.model";
import { Conta } from "../../contas/model/conta.model";
import { TipoConta } from "src/enums/tipoConta";
export declare class ClientesService {
    private readonly filePath;
    private idContador;
    private readClientes;
    private writeClientes;
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, ehGerente: boolean): Cliente;
    findById(id: number): Cliente;
    findAll(): Cliente[];
    modificarCliente(id: number, nome: string, endereco: string, telefone: string): Cliente;
    deletarCliente(id: number): void;
    adicionarConta(id: number, saldo: number, tipo: TipoConta, especifico: number): Conta;
    transferir(origemClienteId: number, origemContaId: number, destinoClienteId: number, destinoContaId: number, valor: number): void;
}
