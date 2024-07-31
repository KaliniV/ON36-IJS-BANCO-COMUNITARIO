export class Conta {
    constructor(
        public saldoInicial: number = 0,
        public type: 'poupanca' | 'corrente'
    ) {

    }
}