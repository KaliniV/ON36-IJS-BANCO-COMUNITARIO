import * as path from "path";
import * as fs from "fs";
import { Cliente } from "src/domain/cliente/cliente.model";

export class ClientesRepository {
  private readonly filePath = path.resolve("src/module/clientes/clientes.json");

  private readClientes(): Cliente[] {
    const data = fs.readFileSync(this.filePath, "utf8");
    return JSON.parse(data) as Cliente[];
  }

  private writeClientes(clientes: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), "utf8");
  }

  findAll(): Cliente[] {
    return this.readClientes();
  }

  findById(id: number): Cliente {
    const clientes = this.readClientes();
    return clientes.find((cliente) => cliente.id === id);
  }

  save(cliente: Cliente): Cliente {
    const clientes = this.readClientes();
    if (!cliente.id) {
      cliente.id =
        clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1;
      clientes.push(cliente);
    } else {
      const index = clientes.findIndex((c) => c.id === cliente.id);
      if (index !== -1) {
        clientes[index] = cliente;
      } else {
        clientes.push(cliente);
      }
    }
    this.writeClientes(clientes);
    return cliente;
  }

  delete(id: number): void {
    const clientes = this.readClientes();
    const index = clientes.findIndex((cliente) => cliente.id === id);
    if (index !== -1) {
      clientes.splice(index, 1);
      this.writeClientes(clientes);
    }
  }
}
