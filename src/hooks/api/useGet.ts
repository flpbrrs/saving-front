import api from "@/services/apiAxiosClient";
import { useQuery } from "@tanstack/react-query";

export default function useGet<T>(key: string, path: string, params?: Object) {
    return useQuery<T>({
        queryKey: [key, params],
        queryFn: async () => {
            const response = await api.get(path, { params })
            return response.data;
        }
    })
}