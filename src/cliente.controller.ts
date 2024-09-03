// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ClienteService } from './cliente.service';
// import { CriarClienteDto } from './dto/criar-cliente.dto';
// import { AtualizarClienteDto } from './dto/atualizar-cliente.dto';

// @Controller('cliente')
// export class ClienteController {
//   constructor(private readonly clienteService: ClienteService) {}

//   @Post('/cadastrar')
//   create(@Body() criarClienteDto: CriarClienteDto) {
//     return this.clienteService.criar(criarClienteDto);
//   }

//   @Get()
//   findAll() {
//     return this.clienteService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.clienteService.findOne(+id);
//   }

//   @Patch(':id')
//   atualizar(
//     @Param('id') id: string,
//     @Body() atualizarClienteDto: AtualizarClienteDto,
//   ) {
//     return this.clienteService.atualizar(+id, atualizarClienteDto);
//   }

//   @Delete(':id')
//   remover(@Param('id') id: string) {
//     return this.clienteService.remover(+id);
//   }
// }
