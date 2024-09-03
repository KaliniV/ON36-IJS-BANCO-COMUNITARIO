import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

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

  conta: [];
}
