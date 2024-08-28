import { Module } from "@nestjs/common";

import { ClientesModule } from "./module/clientes/clientes.module";
import { GerentesModule } from "./module/gerentes/gerentes.module";
import { ContasModule } from "./module/contas/contas.module";

@Module({
  imports: [GerentesModule, ClientesModule, ContasModule],
})
export class AppModule {}
