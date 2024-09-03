import { Inject, Injectable } from '@nestjs/common';
import { Gerente } from 'src/gerente/domain/models/gerente.entity';
import { v4 as uuidv4 } from 'uuid';
import { CriarGerenteComando } from '../ports/in/criar-gerente.comando';
import { GerenteRepositoryPort } from '../ports/out/gerente-repository.port';

@Injectable()
export class GerenteService {
  constructor(
    @Inject('GerenteRepositoryPort')
    private readonly gerenteRepository: GerenteRepositoryPort,
  ) {}

  criar(comando: CriarGerenteComando) {
    const gerente = new Gerente(uuidv4(), comando.nome);
    return this.gerenteRepository.salvar(gerente);
  }

  async findOne(id: string): Promise<Gerente | null> {
    return await this.gerenteRepository.buscarPorId(id);
  }
}
