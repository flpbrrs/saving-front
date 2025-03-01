'use client'

import { AuthContext } from "@/contexts/authProvider";
import { useContext } from "react";

export default function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx)
        throw new Error('Forneça o contexto de autenticação')
    return ctx
}