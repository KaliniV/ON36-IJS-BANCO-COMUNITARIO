import { PartialType } from '@nestjs/mapped-types';
import { CriarGerenteDto } from './criar-gerente.dto';

export class AtualizarGerenteDto extends PartialType(CriarGerenteDto) {}
