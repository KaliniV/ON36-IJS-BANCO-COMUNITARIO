import { Body, Controller, Post, Get, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { Conta } from 'src/contas/conta.model';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.model';

@Controller('clientes')
export class ClientesController {

    constructor(private readonly clientesService: ClientesService) { }

    @Post()
    criarCliente(
        @Body('nome') nome: string,
        @Body('cpf') cpf: string,
        @Body('endereco') endereco: string,
        @Body('telefone') telefone: string,
        @Body('Conta') conta: Conta
    ) {
        return this.clientesService.criarCliente(nome, cpf, endereco, telefone, conta);
    }


    @Get(':id')
    findById(@Param('id') id: number) {
        return this.clientesService.findById(id);
    }
    @Patch(':id/modificacao')
    modificarConta(
        @Param('id') id: number,
        @Body('nome') newNome: string,
        @Body('endereco') newEndereco: string,
        @Body('telefone') newTelefone: string
    ):
        Cliente {
        return this.clientesService.modificarConta(id, newNome, newEndereco, newTelefone);
    }

    @Delete(':id')

    deletarCliente(@Param('id', ParseIntPipe) id: number): void {
        return this.clientesService.deletarCliente(id);
    }
}  
