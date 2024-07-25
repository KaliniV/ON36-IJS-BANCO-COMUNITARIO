export class cliente {
    private nome: string;
    private id: string;
    private endereco: string;
    private telefone: string;
    private cpf: string;

    constructor(nome: string, id: string, endereco: string, telefone: string, cpf: string) {
        this.nome = nome;
        this.id = id;
        this.endereco = endereco;
        this.telefone = telefone;
        this.cpf = cpf;
    }
    public getNome(): string {
        return this.nome;
    }
    public getId(): string {
        return this.id;
    } public getEndereco(): string {
        return this.endereco;
    } public getCpf(): string {
        return this.cpf;
    }
}