import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ClienteService } from 'src/cliente/application/services/cliente.service';
import { CriarClienteDto } from './dto/criar-cliente.dto';
import { CriarClienteComando } from 'src/cliente/application/ports/in/criar-cliente.comando';
import { AtualizarClienteDto } from './dto/atualizar-cliente.dto';
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('cadastrar')
  async CriarCliente(@Body() criarClienteDto: CriarClienteDto): Promise<void> {
    this.clienteService.criar(
      new CriarClienteComando(
        criarClienteDto.nome,
        criarClienteDto.cpf,
        criarClienteDto.idade,
        criarClienteDto.endereco,
        criarClienteDto.telefone,
      ),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clienteService.findOne({ id });
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    const cliente = await this.clienteService.findOne({ id });
    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
    }
    await this.clienteService.deletar(id);
    return { message: `Cliente com ID ${id} deletado com sucesso.` };
  }
  @Patch(':id')
  async atualizarCliente(
    @Param('id') id: string,
    @Body() atualizarClienteDto: AtualizarClienteDto,
  ) {
    await this.clienteService.atualizar(id, atualizarClienteDto);
  }
}
