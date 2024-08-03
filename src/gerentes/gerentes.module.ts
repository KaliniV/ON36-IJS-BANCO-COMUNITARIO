import { Module } from "@nestjs/common";
import { GerentesService } from "./gerentes.service";
import { GerentesController } from "./gerentes.controller";
import { ClientesModule } from "../clientes/clientes.module"; // Importando ClientesModule para acesso ao ClientesService

@Module({
  imports: [ClientesModule], // Importando ClientesModule aqui
  providers: [GerentesService],
  controllers: [GerentesController],
})
export class GerentesModule {}
