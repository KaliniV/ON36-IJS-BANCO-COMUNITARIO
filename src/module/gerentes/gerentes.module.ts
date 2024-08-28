import { Module } from "@nestjs/common";
import { GerentesController } from "src/adapters/inbound/gerentes.controller";
import { GerentesService } from "src/application/gerentes.service";
import { ClientesModule } from "src/module/clientes/clientes.module";

@Module({
  imports: [ClientesModule],
  providers: [GerentesService],
  controllers: [GerentesController],
})
export class GerentesModule {}
