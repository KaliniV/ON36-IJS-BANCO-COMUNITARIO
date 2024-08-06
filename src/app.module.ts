import { Module } from "@nestjs/common";
import { GerentesModule } from "./gerentes/gerentes.module";
import { ClientesModule } from "./clientes/clientes.module";

@Module({
  imports: [GerentesModule, ClientesModule],
})
export class AppModule {}
