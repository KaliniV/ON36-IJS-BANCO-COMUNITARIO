import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { Cliente } from "src/domain/cliente/cliente.model";
import { Conta } from "src/domain/conta/model/conta.model";
import { GerentesService } from "src/application/gerentes.service";
import { TipoConta } from "src/domain/conta/tipoConta";

@Controller("gerentes")
export class GerentesController {
  constructor(private readonly gerentesService: GerentesService) {}

  @Post("cliente")
  criarCliente(
    @Body("nome") nome: string,
    @Body("cpf") cpf: string,
    @Body("endereco") endereco: string,
    @Body("telefone") telefone: string,
    @Body("ehGerente") ehGerente: boolean
  ) {
    return this.gerentesService.criarCliente(
      nome,
      cpf,
      endereco,
      telefone,
      ehGerente
    );
  }

  @Get(":id")
  findById(
    @Param("id", ParseIntPipe) id: number,
    @Query("ehGerente") ehGerente: boolean
  ): Cliente | string {
    return this.gerentesService.findById(id, ehGerente);
  }

  @Get()
  findAll(@Query("ehGerente") ehGerente: boolean) {
    return this.gerentesService.findAll(ehGerente);
  }
  @Patch(":id/modificacao")
  modificarCliente(
    @Param("id", ParseIntPipe) id: number,
    @Body("nome") newNome: string,
    @Body("endereco") newEndereco: string,
    @Body("telefone") newTelefone: string,
    @Query("ehGerente") ehGerente: boolean
  ) {
    return this.gerentesService.modificarCliente(
      id,
      newNome,
      newEndereco,
      newTelefone,
      ehGerente
    );
  }

  @Delete(":id")
  deletarCliente(
    @Param("id", ParseIntPipe) id: number,
    @Query("ehGerente") ehGerente: boolean
  ) {
    return this.gerentesService.deletarCliente(id, ehGerente);
  }

  @Post(":id/adicionar-conta")
  adicionarConta(
    @Param("id", ParseIntPipe) id: number,
    @Body("saldo") saldo: number,
    @Body("tipo") tipo: TipoConta,
    @Body("especifico") especifico: number,
    @Body("ehGerente") ehGerente: boolean
  ): Conta | string {
    return this.gerentesService.adicionarConta(
      id,
      saldo,
      tipo,
      especifico,
      ehGerente
    );
  }
}
