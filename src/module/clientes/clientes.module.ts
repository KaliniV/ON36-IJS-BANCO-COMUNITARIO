import { Module } from "@nestjs/common";
import { ClientesController } from "src/adapters/inbound/clientes.controller";
import { ClientesRepository } from "src/adapters/outbound/clientes.repository";
import { ClientesService } from "src/application/clientes.service";

@Module({
  providers: [ClientesService, ClientesRepository], // Adicione o repositório aos provedores
  controllers: [ClientesController],
  exports: [ClientesService], // Exportando ClientesService para que possa ser usado em outros módulos
})
export class ClientesModule {}
