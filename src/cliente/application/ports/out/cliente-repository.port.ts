import { Cliente } from 'src/cliente/domain/models/cliente.entity';

export abstract class ClienteRepositoryPort {
  abstract salvar(cliente: Cliente): Promise<void>;
  abstract buscarPorId(id: string): Promise<Cliente | null>;
  abstract buscarTodos(): Promise<Cliente[]>;
  abstract deletar(id: string): Promise<void>;
}
