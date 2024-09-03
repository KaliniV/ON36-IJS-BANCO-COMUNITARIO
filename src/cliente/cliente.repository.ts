// import * as path from 'path';
// import * as fs from 'fs';
// import { Cliente } from '../cliente/entities/cliente.entity';
// import { NotFoundException } from '@nestjs/common';

// export class ClienteRepository {
//   private readonly filePath = path.resolve('src/banco-cliente.json');

//   private lerCliente(): Cliente[] {
//     const dados = fs.readFileSync(this.filePath, 'utf8');
//     return JSON.parse(dados) as Cliente[];
//   }

//   private escreverCliente(clientes: Cliente[]): void {
//     fs.writeFileSync(this.filePath, JSON.stringify(clientes, null, 2), 'utf8');
//   }

//   salvar(cliente: Cliente): Cliente {
//     const clientes = this.lerCliente();
//     if (!cliente.id) {
//       cliente.id =
//         clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1;
//       clientes.push(cliente);
//     } else {
//       const index = clientes.findIndex((c) => c.id === cliente.id);
//       if (index !== -1) {
//         clientes[index] = cliente;
//       } else {
//         clientes.push(cliente);
//       }
//     }
//     this.escreverCliente(clientes);
//     return cliente;
//   }

//   findById(id: number): Cliente {
//     const clientes = this.lerCliente();
//     const cliente = clientes.find((cliente) => cliente.id === id);
//     if (!cliente) {
//       throw new NotFoundException(`Cliente com o id ${id} não foi encontrado.`);
//     }
//     return cliente;
//   }
//   findAll(): Cliente[] {
//     return this.lerCliente();
//   }
//   deletar(id: number): void {
//     const clientes = this.lerCliente();
//     const index = clientes.findIndex((cliente) => cliente.id === id);
//     if (index !== -1) {
//       clientes.splice(index, 1);
//       this.escreverCliente(clientes);
//     }
//   }
// }
