'use client'

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { registerFormData, registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import useNotification from "@/hooks/useNotification"
import useAuth from "@/hooks/useAuth"

interface registerHandlerProps {
    isInRegisterContext: boolean,
    submitCallback: () => void
}

export default function useRegisterFormHandler(props: registerHandlerProps) {
    const [passwordIsVisible, setPasswordVisibility] = useState<boolean>(false)
    const [confirmIsVisible, setConfirmVisibility] = useState<boolean>(false)
    const { register: registerFn } = useAuth()

    const { notify } = useNotification()

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<registerFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    useEffect(() => {
        if (!props.isInRegisterContext)
            reset()
    }, [props.isInRegisterContext])

    const onSubmit = handleSubmit(async (data) => {
        try {
            await registerFn(data.nome, data.email, data.senha)
            notify('Usuário registrado! Faça o login')
            reset()
            props.submitCallback()
        } catch (e: any) {
            setError('root', { message: e.message })
        }
    })

    return ({
        register,
        errors,
        onSubmit,
        isSubmitting,
        passwordIsVisible,
        confirmIsVisible,
        tooglePasswordVisibility: () => setPasswordVisibility(!passwordIsVisible),
        toogleConfirmVisibility: () => setConfirmVisibility(!confirmIsVisible)
    })
}