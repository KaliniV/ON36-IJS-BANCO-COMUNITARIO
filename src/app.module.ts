import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { GerentesModule } from './gerentes/gerentes.module';


@Module({
    imports: [ClientesModule, GerentesModule],
    controllers: [],
    providers: [],
})
export class AppModule { }