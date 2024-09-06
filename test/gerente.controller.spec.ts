import { Test, TestingModule } from '@nestjs/testing';
import { GerenteController } from '../src/gerente/adapter/in/web/gerente.controller';
import { GerenteService } from '../src/gerente/application/services/gerente.service';

describe('GerenteController', () => {
  let controller: GerenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GerenteController],
      providers: [GerenteService],
    }).compile();

    controller = module.get<GerenteController>(GerenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
