import { PartialType } from '@nestjs/mapped-types';
import { CriarContaDto } from './criar-conta.dto';

export class AtualizarContaDto extends PartialType(CriarContaDto) {}
