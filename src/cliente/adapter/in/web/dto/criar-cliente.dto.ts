import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Conta } from 'src/conta/domain/models/conta.entity';

export class CriarClienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsInt()
  @Min(18)
  idade: number;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  conta: Conta[];
}
