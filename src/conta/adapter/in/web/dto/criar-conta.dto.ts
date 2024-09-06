import { IsNotEmpty, IsNumber } from 'class-validator';
import { TipoConta } from 'src/conta/domain/enums/tipo-conta.enum';

export class CriarContaDto {
  @IsNotEmpty()
  @IsNumber()
  titularId: number;

  @IsNotEmpty()
  @IsNumber()
  saldo: number;

  @IsNotEmpty()
  tipo: TipoConta; // Usando o enum TipoConta
  ehGerente: boolean;
}
