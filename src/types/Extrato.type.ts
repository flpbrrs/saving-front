import { Transacao } from "./Transacao.type";

export type Extrato = {
    total: number,
    income: number,
    expense: number,
    analysis: {
        label: string,
        total: number
    }[],
    transacoes: Transacao[]
}