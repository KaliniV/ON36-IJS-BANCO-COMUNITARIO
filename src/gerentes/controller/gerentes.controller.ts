import {
  BadRequestException,
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
import { GerentesService } from "../service/gerentes.service";
import { Cliente } from "src/clientes/model/cliente.model";
import { Conta } from "src/contas/model/conta.model";
import { TipoConta } from "src/enums/tipoConta";

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
  @Post("transferir")
  async transferir(
    @Body()
    body: {
      origemClienteId: number;
      origemContaId: number;
      destinoClienteId: number;
      destinoContaId: number;
      valor: number;
    },
    @Query("ehGerente") ehGerente: boolean
  ): Promise<string> {
    const {
      origemClienteId,
      origemContaId,
      destinoClienteId,
      destinoContaId,
      valor,
    } = body;

    if (valor <= 0) {
      throw new BadRequestException(
        "O valor da transferência deve ser positivo."
      );
    }

    try {
      const resultado = await this.gerentesService.transferir(
        origemClienteId,
        origemContaId,
        destinoClienteId,
        destinoContaId,
        valor,
        ehGerente
      );

      return resultado;
    } catch (error) {
      return `Erro: ${error.message}`;
    }
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
