import { ClientesService } from "../clientes/service/clientes.service"; // Ajuste o caminho conforme necessário
import { Cliente } from "../clientes/model/cliente.model"; // Ajuste o caminho conforme necessário
import * as fs from "fs";
import * as path from "path";
jest.mock("fs");
const mockedFs = fs as jest.Mocked<typeof fs>;

// Mock do path.resolve
jest.mock("path", () => ({
  resolve: jest.fn().mockReturnValue("src/clientes/clientes.json"),
}));

describe("Cliente Service", () => {
  let service: ClientesService;

  beforeEach(() => {
    service = new ClientesService();
    // Limpa os mocks antes de cada teste
    mockedFs.readFileSync.mockClear();
    mockedFs.writeFileSync.mockClear();
  });

  test("criarCliente deve criar um novo cliente e salvar no arquivo", () => {
    // Dados mockados
    const clientesMock: Cliente[] = [];
    const newCliente: Cliente = {
      id: 1,
      nome: "João da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua A, 123",
      telefone: "98765-4321",
      contas: [],
    };

    // Mock da função readFileSync
    mockedFs.readFileSync.mockReturnValue(JSON.stringify(clientesMock));

    // Mock da função writeFileSync
    mockedFs.writeFileSync.mockImplementation(() => {});

    // Chamada do método a ser testado
    const clienteCriado = service.criarCliente(
      newCliente.nome,
      newCliente.cpf,
      newCliente.endereco,
      newCliente.telefone,
      false
    );

    // Verificações
    expect(clienteCriado).toEqual(newCliente);
    expect(mockedFs.writeFileSync).toHaveBeenCalledWith(
      "src/clientes/clientes.json",
      JSON.stringify([newCliente], null, 2),
      "utf8"
    );
  });

  test("findById deve buscar por id", () => {
    // Dados mockados
    const newCliente: Cliente = {
      id: 1,
      nome: "João da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua A, 123",
      telefone: "98765-4321",
      contas: [],
    };
    const clientesMock: Cliente[] = [newCliente]; // Atualizado para incluir o cliente

    mockedFs.readFileSync.mockReturnValue(JSON.stringify(clientesMock));

    mockedFs.writeFileSync.mockImplementation(() => {});

    const clienteCriado = service.findById(newCliente.id);

    expect(clienteCriado).toEqual(newCliente);
  });
});
