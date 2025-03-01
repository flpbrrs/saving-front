'use client'

import { NotificationContext } from "@/contexts/notificationProvider"
import { useContext } from "react"

export default function useNotification() {
    const ctx = useContext(NotificationContext)
    if (!ctx)
        throw new Error('Forneça o contexto de notificação')
    return ctx
}