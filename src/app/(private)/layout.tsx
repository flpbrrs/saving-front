'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"

export default function Layout({ children }: { children: React.ReactNode }) {
    const { loggedUser } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedUser)
            router.push('/login')
    }, [loggedUser, router])

    if (!loggedUser)
        return null

    return <>{children}</>
}
