import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ClientePersistenciaAdapter } from './cliente/adapter/out/persistence/cliente.pesistencia.adapter';
import { ClienteService } from './cliente/application/services/cliente.service';
import { ClienteController } from './cliente/adapter/in/web/cliente.controller';
import { GerenteService } from './gerente/application/services/gerente.service';
import { GerentePersistenciaAdapter } from './gerente/adapter/out/persistence/gerente.persistencia.adapter';
import { GerenteController } from './gerente/adapter/in/web/gerente.controller';
import { GerenteModule } from './gerente/gerente.module';
import { ContaModule } from './conta/conta.module';

@Module({
  imports: [ClienteModule, GerenteModule, ContaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
