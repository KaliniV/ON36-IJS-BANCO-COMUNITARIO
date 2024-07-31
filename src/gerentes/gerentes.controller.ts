import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { Cliente } from 'src/clientes/cliente.model';
import { Gerente } from './gerente.model';

@Controller('gerentes')
export class GerentesController {
    constructor(private readonly gerentesService: GerentesService) { }

    @Post()
    criarCliente(
        @Body('nome') nome: string,
        @Body('cliente') cliente: Cliente
    ) {
        return this.gerentesService.criarCliente(nome, cliente);
    }
    @Get()
    findAll(): Gerente[] {
        return this.gerentesService.findAll();
    }

    @Patch(':idGerente/clientes/:id')
    modificarCliente(
        @Param('idGerente') idGerente: number,
        @Param('id') id: number,
        @Body() clienteAtualizado: Partial<Cliente>
    ) {
        const cliente = this.gerentesService.modificarCliente(idGerente, id, clienteAtualizado);

        return cliente;
    }
    @Delete(':idGerente')
    deletarCliente(@Param('idGerente', ParseIntPipe) idGerente: number): void {
        return this.gerentesService.deletarCliente(idGerente);
    }

}