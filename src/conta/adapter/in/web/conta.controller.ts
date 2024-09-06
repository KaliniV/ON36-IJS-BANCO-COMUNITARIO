import { Controller, Post, Body } from '@nestjs/common';
import { ContaService } from '../../../application/services/conta.service';
import { CriarContaDto } from './dto/criar-conta.dto';

@Controller('contas')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Post()
  async criarConta(@Body() criarContaDto: CriarContaDto): Promise<void> {
    console.log('conta criada');
    await this.contaService.criar(criarContaDto);
  }
}
