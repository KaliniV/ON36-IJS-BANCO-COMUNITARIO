import { TipoConta } from '../enums/tipo-conta.enum';
import { ContaCorrente } from '../models/conta-corrente.model';
import { ContaPoupanca } from '../models/conta-poupanca.model';
import { Conta } from '../models/conta.entity';

export class ContasFactory {
  static CriarConta(
    id: number,
    titularId: number, // ID do Cliente
    saldo: number,
    tipo: TipoConta,
    especifico: number,
  ): Conta {
    if (tipo === TipoConta.POUPANCA) {
      return new ContaPoupanca(id, titularId, saldo, especifico);
    } else if (tipo === TipoConta.CORRENTE) {
      return new ContaCorrente(id, titularId, saldo, especifico);
    }
    throw new Error('Tipo de conta não existe');
  }
}
