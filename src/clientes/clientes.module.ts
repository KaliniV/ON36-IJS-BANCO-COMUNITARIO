import { Module } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { ClientesController } from "./clientes.controller";

@Module({
  providers: [ClientesService],
  controllers: [ClientesController],
  exports: [ClientesService], // Exportando ClientesService para que possa ser usado em outros módulos
})
export class ClientesModule {}
