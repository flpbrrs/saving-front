import { Extrato } from "@/types/Extrato.type";
import { useGet } from "./api";

export default function useTransactions() {
    const getExtrato = (ano: number, mes: number) =>
        useGet<Extrato>('transactions', `/transaction/${mes}/${ano}`)

    return { getExtrato }
}