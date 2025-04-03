import api from "@/services/apiAxiosClient";
import { Extrato } from "@/types/Extrato.type";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useExtrato() {
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1)
    const [year, setYear] = useState<number>(new Date().getFullYear())

    const next = () => {
        setMonth(prev => (prev % 12) + 1)
        if (month === 12) setYear(prev => prev + 1)
    }

    const previous = () => {
        setMonth(prev => (prev === 1 ? 12 : prev - 1))
        if (month === 1) setYear(prev => prev - 1)
    }

    const { data, isLoading, error, refetch } = useQuery<Extrato>({
        queryKey: ["transactions", year, month],
        queryFn: async () => {
            const response = await api.get(`/transaction/${month}/${year}`)
            return response.data
        }
    })

    return {
        month: month.toString().padStart(2, '0'),
        year: year.toString(),
        next,
        previous,
        data,
        isLoading,
        error,
        refetch
    }
}