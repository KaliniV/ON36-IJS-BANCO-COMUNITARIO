import { Module } from "@nestjs/common";
import { GerentesService } from "./service/gerentes.service";
import { GerentesController } from "./controller/gerentes.controller";
import { ClientesModule } from "../clientes/clientes.module";

@Module({
  imports: [ClientesModule],
  providers: [GerentesService],
  controllers: [GerentesController],
})
export class GerentesModule {}
