'use client'

import { createContext, useEffect, useState } from "react"

interface NotificationContextType {
    notificationIsVisible: boolean,
    message: string,
    setNotificationVisibility: (visibility: boolean) => void,
    notify: (message: string) => void
}

export const NotificationContext = createContext<NotificationContextType | null>(null)

export default function NotificationProvider(
    { children }: { children: React.ReactNode }
) {
    const [notificationIsVisible, setNotificationVisibility] = useState(false)
    const [message, setMesage] = useState<string>('')

    const notify = (message: string) => {
        setMesage(message)
        setNotificationVisibility(true)
    }

    return (
        <NotificationContext.Provider value={{
            notificationIsVisible,
            message,
            setNotificationVisibility,
            notify
        }}>
            {children}
        </NotificationContext.Provider>
    )
}