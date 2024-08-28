import { Module } from "@nestjs/common";
import { ContasController } from "src/adapters/inbound/contas.controller";
import { ContasService } from "src/application/contas.service";

@Module({
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
