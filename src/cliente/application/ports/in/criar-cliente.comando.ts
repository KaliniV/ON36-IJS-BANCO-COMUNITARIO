export class CriarClienteComando {
  constructor(
    public readonly nome: string,
    public readonly cpf: string,
    public readonly idade: number,
    public readonly endereco: string,
    public readonly telefone: string,
    public conta?: [],
  ) {}
}
