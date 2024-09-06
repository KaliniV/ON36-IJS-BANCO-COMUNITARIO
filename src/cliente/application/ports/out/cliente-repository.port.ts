import { Cliente } from 'src/cliente/domain/models/cliente.entity';

export interface ClienteRepositoryPort {
  atualizarCliente(cliente: Cliente): Promise<void>;
  salvar(cliente: Cliente): Promise<void>;
  buscarPorId(id: string): Promise<Cliente | null>;
  buscarTodos(): Promise<Cliente[]>;
  deletar(id: string): Promise<void>;
}
