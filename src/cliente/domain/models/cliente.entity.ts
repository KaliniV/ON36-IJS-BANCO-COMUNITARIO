import { Injectable } from '@nestjs/common';
import { Conta } from 'src/conta/domain/models/conta.entity';

@Injectable()
export class Cliente {
  constructor(
    public id: string,
    public nome: string,
    public cpf: string,
    public idade: number,
    public endereco: string,
    public telefone: string,
    public contas: Conta[] = [],
  ) {}
}
