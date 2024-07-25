import { Conta } from 'src/contas/conta.model';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    criarCliente(nome: string, cpf: string, endereco: string, telefone: string, conta: Conta): Cliente;
    findById(id: number): Cliente;
    modificarConta(id: number, newNome: string, newEndereco: string, newTelefone: string): Cliente;
    deletarCliente(id: number): void;
}
