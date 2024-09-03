import { Cliente } from 'src/cliente/domain/models/cliente.entity';

export class ClienteMapeador {
  static paraPersistence(cliente: Cliente) {
    return {
      id: cliente.id,
      nome: cliente.nome,
      cpf: cliente.cpf,
      idade: cliente.idade,
      endereco: cliente.endereco,
      telefone: cliente.telefone,
    };
  }
  static paraDominio(persistido: any): Cliente {
    // Certifique-se de que esta função retorna um valor síncrono
    return new Cliente(
      persistido.id,
      persistido.nome,
      persistido.cpf,
      persistido.idade,
      persistido.endereco,
      persistido.telefone,
    );
  }
}
