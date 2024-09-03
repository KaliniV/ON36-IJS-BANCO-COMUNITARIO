import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContaService } from './conta.service';
import { CriarContaDto } from './dto/criar-conta.dto';
import { AtualizarContaDto } from './dto/atualizar-conta.dto';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  criar(@Body() criarContaDto: CriarContaDto) {
    return this.contaService.criar(criarContaDto);
  }

  @Get()
  findAll() {
    return this.contaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaService.findOne(+id);
  }

  @Patch(':id')
  atualizar(
    @Param('id') id: string,
    @Body() atualizarContaDto: AtualizarContaDto,
  ) {
    return this.contaService.atualizar(+id, atualizarContaDto);
  }

  @Delete(':id')
  remover(@Param('id') id: string) {
    return this.contaService.remover(+id);
  }
}
