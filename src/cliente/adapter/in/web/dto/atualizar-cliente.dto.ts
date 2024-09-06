import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AtualizarClienteDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  cpf?: string;

  @IsNumber()
  @IsOptional()
  idade?: number;

  @IsString()
  @IsOptional()
  endereco?: string;

  @IsString()
  @IsOptional()
  telefone?: string;
}
