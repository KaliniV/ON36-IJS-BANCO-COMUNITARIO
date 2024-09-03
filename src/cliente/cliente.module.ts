import { Module } from '@nestjs/common';
import { ClienteController } from './adapter/in/web/cliente.controller';
import { ClienteService } from './application/services/cliente.service';
import { ClientePersistenciaAdapter } from './adapter/out/persistence/cliente.pesistencia.adapter';

@Module({
  controllers: [ClienteController],
  providers: [
    ClienteService,
    { provide: 'ClienteRepositoryPort', useClass: ClientePersistenciaAdapter },
  ],
  exports: [ClienteService],
})
export class ClienteModule {}
