import { Test, TestingModule } from "@nestjs/testing";
import { ClientesController } from ".././src/clientes/controller/clientes.controller";

describe("ClientesController", () => {
  let controller: ClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
