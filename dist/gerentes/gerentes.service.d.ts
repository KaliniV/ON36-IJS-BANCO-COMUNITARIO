import { Cliente } from "src/clientes/cliente.model";
import { ClientesService } from "src/clientes/clientes.service";
import { Conta } from "src/contas/conta.model";
import { TipoConta } from "src/enums/tipoConta";
export declare class GerentesService {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, ehGerente: boolean): Cliente | string;
    findAll(ehGerente: boolean): Cliente[] | string;
    findById(id: number, ehGerente: boolean): Cliente | "Acesso negado: você não tem permissões de gerente.";
    modificarCliente(id: number, nome: string, endereco: string, telefone: string, ehGerente: boolean): Cliente | string;
    deletarCliente(id: number, ehGerente: boolean): string;
    adicionarConta(id: number, saldo: number, tipo: TipoConta, especifico: number, ehGerente: boolean): Conta | string;
}
