import api from "@/services/apiAxiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateTransaction() {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: async (novaTransaction: any) => {
            await api.post('/transaction', novaTransaction)
        },
        onSuccess: (_data, variables) => {
            const { data } = variables

            const [year, month, _] = String(data).split("-");

            queryClient.invalidateQueries({
                queryKey: ["transactions", Number(year), Number(month)]
            })
        }
    })

    return mutation
}