import { TipoConta } from "src/enums/tipoConta";
export declare class Conta {
    id: number;
    titularId: number;
    saldo: number;
    tipo: TipoConta;
    constructor(id: number, titularId: number, saldo: number, tipo: TipoConta);
}
