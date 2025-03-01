'use client'

import useNotification from "@/hooks/useNotification";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function NotificationContainer() {
    const { 
        message,
        notificationIsVisible,
        setNotificationVisibility
    } = useNotification()

    return (
        <AnimatePresence>
            {notificationIsVisible && (
                <motion.div
                    key="modal"
                    initial={{ opacity: 1, y: -100 }}
                    animate={{ opacity: [1, 1, 1, 0], y: [-100, 0, 0, 0] }}
                    transition={{ times: [0, 0.05, 0.99, 1], duration: 4 }}
                    onAnimationComplete={() => setNotificationVisibility(false)}
                    className="fixed w-full p-4 top-0 left-0 z-50 flex justify-center items-center" role="alert"
                >
                    <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-800 bg-emerald-100 rounded-lg shadow-sm">
                        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-emerald-100 bg-emerald-800 rounded-lg">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">
                            {message}
                        </div>
                        <button
                            onClick={() => setNotificationVisibility(false)} 
                            type="button" className="ms-auto -mx-1.5 -my-1.5 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}