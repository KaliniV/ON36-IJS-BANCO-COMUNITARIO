import { Module } from "@nestjs/common";
import { ContasController } from "./controller/contas.controller";
import { ContasService } from "./service/contas.service";

@Module({
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
