import { cliente } from './domain/Cliente';
import { Conta } from './domain/Conta';

const cliente1 = new cliente("Kalini", "12", "Rua ..", "(21) 99877-777", "123.432.222-01")
const conta1 = new Conta(1000, cliente1, "001")

console.log(`Cliente: ${cliente1.getNome()}`)
console.log(`Saldo inicial da conta: ${conta1.Saldo}`)

conta1.depositar(100);
console.log(`Saldo atual após depósito: ${conta1.Saldo}`)

console.log(`Valor do cheque especial: ${conta1.SaldoChequeEspecial} `)
conta1.sacarCorrente(300)
console.log(`Novo saldo após saque: ${conta1.Saldo}`)

const conta2 = new Conta(500, new cliente('Maria', '2', 'Av. ..', '(11) 88888-8888', '987.654.321-00'), '002');
console.log(`Saldo inicial da outra conta: ${conta2.Saldo}`);

conta1.transferir(300, conta2);
console.log(`Novo saldo da conta após transferência: ${conta1.Saldo}`);
console.log(`Novo saldo da outra conta após transferência: ${conta2.Saldo}`);



