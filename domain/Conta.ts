import { cliente } from './Cliente';
export class Conta {
  private clienteId: string | null = null;
  private saldo: number;
  private cliente: cliente;
  private agencia: string;
  private saldoChequeEspecial: number = 100;

  constructor(saldoInicial: number, cliente: cliente, agencia: string) {
    this.saldo = saldoInicial
    this.cliente = cliente
    this.agencia = agencia
  }
  public get Saldo(): number {
    return this.saldo;
  }

  public get SaldoChequeEspecial(): number {
    return this.saldo;
  }

  sacarCorrente(valor: number) {
    let total: number = this.saldo + this.saldoChequeEspecial;
    const valorSacado = valor;
    if (total >= valorSacado) {
      total -= valorSacado;
      return valorSacado;
    }
  }
  sacarPoupanca(valor: number) {
    const valorSacado: number = valor * 1.2;
    if (this.saldo >= valorSacado) {
      this.saldo -= valorSacado;
      return valorSacado;
    }
  }
  depositar(valor: number) {
    if (valor <= 0) return
    this.saldo = this.saldo + valor;
  }
  transferir(valor: number, contaDestino: Conta): boolean {
    // Verifica se há saldo suficiente na conta atual para transferência
    if (this.saldo >= valor) {
      // Realiza a transferência deduzindo da conta atual e adicionando na conta de destino
      this.saldo -= valor;
      contaDestino.depositar(valor);
      return true; // Transferência bem-sucedida
    } else {
      // Caso não haja saldo suficiente, a transferência não é realizada
      return false; // Transferência mal-sucedida
    }
  }

}