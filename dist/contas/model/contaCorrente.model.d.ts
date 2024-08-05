import { Conta } from "./conta.model";
export declare class ContaCorrente extends Conta {
    limite: number;
    constructor(id: number, titularId: number, saldo: number, limite: number);
}
