import { GerentesService } from "../service/gerentes.service";
import { Cliente } from "src/clientes/model/cliente.model";
import { Conta } from "src/contas/model/conta.model";
import { TipoConta } from "src/enums/tipoConta";
export declare class GerentesController {
    private readonly gerentesService;
    constructor(gerentesService: GerentesService);
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, ehGerente: boolean): string | Cliente;
    findById(id: number, ehGerente: boolean): Cliente | string;
    findAll(ehGerente: boolean): string | Cliente[];
    modificarCliente(id: number, newNome: string, newEndereco: string, newTelefone: string, ehGerente: boolean): string | Cliente;
    deletarCliente(id: number, ehGerente: boolean): string;
    adicionarConta(id: number, saldo: number, tipo: TipoConta, especifico: number, ehGerente: boolean): Conta | string;
}
