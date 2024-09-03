import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { ClientePersistenciaAdapter } from './cliente/adapter/out/persistence/cliente.pesistencia.adapter';
import { ClienteService } from './cliente/application/services/cliente.service';
import { ClienteController } from './cliente/adapter/in/web/cliente.controller';

@Module({
  imports: [ClienteModule],
  controllers: [AppController, ClienteController],
  providers: [
    AppService,
    ClienteService,
    { provide: 'ClienteRepositoryPort', useClass: ClientePersistenciaAdapter },
  ],
})
export class AppModule {}
