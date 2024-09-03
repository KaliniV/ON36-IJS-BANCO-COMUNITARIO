import { PartialType } from '@nestjs/mapped-types';
import { CriarGerenteDto } from '../adapter/in/web/dto/criar-gerente.dto';

export class AtualizarGerenteDto extends PartialType(CriarGerenteDto) {}
