import { Gerente } from 'src/gerente/domain/models/gerente.entity';

export class GerenteMapeador {
  static paraPersistence(gerente: Gerente) {
    return {
      idGerente: gerente.idGerente,
      nome: gerente.nome,
    };
  }
  static paraDominio(persistido: any): Gerente {
    return new Gerente(persistido.id, persistido.nome);
  }
}
