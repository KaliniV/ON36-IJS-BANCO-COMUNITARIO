import { IsNotEmpty, IsString } from 'class-validator';

export class CriarGerenteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;
}
