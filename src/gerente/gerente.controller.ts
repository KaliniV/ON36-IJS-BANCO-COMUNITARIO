import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { CriarGerenteDto } from './dto/criar-gerente.dto';
import { AtualizarGerenteDto } from './dto/atualizar-gerente.dto';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService) {}

  @Post()
  criar(@Body() criarGerenteDto: CriarGerenteDto) {
    return this.gerenteService.criar(criarGerenteDto);
  }

  @Get()
  findAll() {
    return this.gerenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gerenteService.findOne(+id);
  }

  @Patch(':id')
  atualizar(
    @Param('id') id: string,
    @Body() atualizarGerenteDto: AtualizarGerenteDto,
  ) {
    return this.gerenteService.atualizar(+id, atualizarGerenteDto);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.gerenteService.remover(+id);
  }
}
