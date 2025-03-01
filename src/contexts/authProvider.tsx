'use client'

import api from "@/services/apiAxiosClient"
import Usuario from "@/types/User.type"
import { useQueryClient } from "@tanstack/react-query"
import { createContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

interface AuthContextType {
    loggedUser: Usuario | null,
    login: (email: string, senha: string) => Promise<void>,
    logout: () => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider(
    { children }: { children: React.ReactNode }
) {
    const [loggedUser, setLoggedUser] = useState<Usuario | null>(null)
    const [loading, setLoading] = useState(true);
    const queryClient = useQueryClient()
    const router = useRouter()

    const isBrowser = typeof window !== "undefined";

    const loadUserFromStorage = async () => {
        if (!isBrowser) return;
    
        const token = localStorage.getItem("authToken");
    
        if (token) {
          try {
            const { data } = await api.get<Usuario>("/me", {
              headers: { Authorization: `Bearer ${token}` },
            });
            setLoggedUser(data);
          } catch (error) {
            localStorage.removeItem("authToken");
          }
        }
        setLoading(false);
      };
    
      useEffect(() => {
        loadUserFromStorage();
      }, [isBrowser]);

    const login = async (email: string, senha: string) => {
        try {
            const { data } = await api.post<{ usuario: Usuario, token: string}>(
                '/login',
                { email, senha}
            )

            if (!isBrowser) return;

            localStorage.setItem("authToken", data.token);
            setLoggedUser(data.usuario)
            router.push('/home')
        } catch (e: any) {
            if(e.response.status === 401)
                throw new Error(e.response.data.erros);
            
            throw new Error("Ops! Algo está errado! Tente novamento mais tarde")
        }
    }

    const logout = async () => {
        if (!isBrowser) return;

        localStorage.removeItem("authToken");
        setLoggedUser(null);
        queryClient.clear();
    }

    return (
        <AuthContext.Provider value={{ 
            loggedUser,
            login,
            logout
        }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}