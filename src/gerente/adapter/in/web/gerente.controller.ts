import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CriarGerenteComando } from 'src/gerente/application/ports/in/criar-gerente.comando';
import { GerenteService } from 'src/gerente/application/services/gerente.service';
import { CriarGerenteDto } from './dto/criar-gerente.dto';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post('cadastrar')
  async criarGerente(@Body() criarGerenteDto: CriarGerenteDto) {
    this.gerenteService.criar(new CriarGerenteComando(criarGerenteDto.nome));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.gerenteService.findOne(id);
  }
}
