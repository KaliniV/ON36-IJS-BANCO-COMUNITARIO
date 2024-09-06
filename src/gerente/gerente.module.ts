import { Module } from '@nestjs/common';
import { GerenteService } from './application/services/gerente.service';
import { GerenteController } from './adapter/in/web/gerente.controller';
import { GerentePersistenciaAdapter } from './adapter/out/persistence/gerente.persistencia.adapter';

@Module({
  controllers: [GerenteController],
  providers: [
    GerenteService,
    { provide: 'GerenteRepositoryPort', useClass: GerentePersistenciaAdapter },
  ],
  exports: [GerenteService],
})
export class GerenteModule {}
