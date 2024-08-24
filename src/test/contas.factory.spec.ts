import { ContaCorrente } from "../contas/model/contaCorrente.model";
import { ContasFactory } from "../factory/contas.factory";
import { TipoConta } from "../enums/tipoConta";
import { ContaPoupanca } from "../contas/model/contaPoupanca.model";

describe("Contas Factory", () => {
  test("criar conta corrente", () => {
    const contaFactory = ContasFactory.CriarConta(
      101,
      1,
      5000,
      TipoConta.CORRENTE,
      1000
    );
    expect(contaFactory).toBeInstanceOf(ContaCorrente); // Verifica se é uma instância de ContaCorrente
    expect(contaFactory.id).toBe(101);
    expect(contaFactory.titularId).toBe(1);
    expect(contaFactory.saldo).toBe(5000);
    expect((contaFactory as ContaCorrente).limite).toBe(1000);
  });
  test("criar conta poupanca", () => {
    const contaFactory = ContasFactory.CriarConta(
      101,
      1,
      5000,
      TipoConta.POUPANCA,
      0.5
    );
    expect(contaFactory).toBeInstanceOf(ContaPoupanca); // Verifica se é uma instância de ContaPoupanca
    expect(contaFactory.id).toBe(101);
    expect(contaFactory.titularId).toBe(1);
    expect(contaFactory.saldo).toBe(5000);
    expect((contaFactory as ContaPoupanca).rendimento).toBe(0.5);
  });
});
