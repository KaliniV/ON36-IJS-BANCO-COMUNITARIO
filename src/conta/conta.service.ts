import { Injectable } from '@nestjs/common';
import { CriarContaDto } from './dto/criar-conta.dto';
import { AtualizarContaDto } from './dto/atualizar-conta.dto';

@Injectable()
export class ContaService {
  criar(criarContaDto: CriarContaDto) {
    return 'This action adds a new conta';
  }

  findAll() {
    return `This action returns all conta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conta`;
  }

  atualizar(id: number, atualizarContaDto: AtualizarContaDto) {
    return `This action updates a #${id} conta`;
  }

  remover(id: number) {
    return `This action removes a #${id} conta`;
  }
}
