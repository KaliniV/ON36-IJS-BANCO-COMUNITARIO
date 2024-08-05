import { Conta } from "src/contas/model/conta.model";
import { TipoConta } from "src/enums/tipoConta";
export declare class ContasFactory {
    static CriarConta(id: number, titularId: number, saldo: number, tipo: TipoConta, especifico: number): Conta;
}
