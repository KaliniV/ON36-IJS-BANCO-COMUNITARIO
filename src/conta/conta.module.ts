import { Module } from '@nestjs/common';
import { ContaController } from './adapter/in/web/conta.controller';
import { ContaService } from './application/services/conta.service';
import { ClienteModule } from 'src/cliente/cliente.module';
@Module({
  imports: [ClienteModule], // Importe o ClienteModule para acessar o ClienteService e o ClienteRepositoryPort
  controllers: [ContaController],
  providers: [ContaService],
  exports: [ContaService],
})
export class ContaModule {}
