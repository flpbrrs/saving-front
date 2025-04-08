'use client'

import { useEffect, useState } from "react"
import { Path, useForm } from "react-hook-form"
import { registerFormData, registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import useNotification from "@/hooks/useNotification"
import useAuth from "@/hooks/useAuth"
import useCoreTranslator from "@/hooks/useCoreTranslator"

interface registerHandlerProps {
    isInRegisterContext: boolean,
    submitCallback: () => void
}

export default function useRegisterFormHandler(props: registerHandlerProps) {
    const [passwordIsVisible, setPasswordVisibility] = useState<boolean>(false)
    const [confirmIsVisible, setConfirmVisibility] = useState<boolean>(false)
    const { parse } = useCoreTranslator()
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
            const translatedErrors = parse(e.message)
            translatedErrors.forEach(({ field, error }) => {
                setError(field as Path<registerFormData>, error)
            })
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