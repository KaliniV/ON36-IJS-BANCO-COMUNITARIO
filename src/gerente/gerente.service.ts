import { Injectable } from '@nestjs/common';
import { CriarGerenteDto } from './dto/criar-gerente.dto';
import { AtualizarGerenteDto } from './dto/atualizar-gerente.dto';

@Injectable()
export class GerenteService {
  criar(criarGerenteDto: CriarGerenteDto) {
    return 'This action adds a new gerente';
  }

  findAll() {
    return `This action returns all gerente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gerente`;
  }

  atualizar(id: number, atualizarGerenteDto: AtualizarGerenteDto) {
    return `This action updates a #${id} gerente`;
  }

  remover(id: number) {
    return `This action removes a #${id} gerente`;
  }
}
