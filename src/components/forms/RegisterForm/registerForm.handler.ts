'use client'

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { registerFormData, registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import useNotification from "@/hooks/useNotification"

interface registerHandlerProps {
    isInRegisterContext: boolean
}

export default function useRegisterFormHandler(props: registerHandlerProps) {
    const [passwordIsVisible, setPasswordVisibility] = useState<boolean>(false)
    const [confirmIsVisible, setConfirmVisibility] = useState<boolean>(false)

    const { notify } = useNotification()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<registerFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    useEffect(() => {
        if (!props.isInRegisterContext)
            reset()
    }, [props.isInRegisterContext])

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        notify('Usuário registrado! Faça o login')
        reset()
    })

    return ({
        register,
        errors,
        onSubmit,
        passwordIsVisible,
        confirmIsVisible,
        tooglePasswordVisibility: () => setPasswordVisibility(!passwordIsVisible),
        toogleConfirmVisibility: () => setConfirmVisibility(!confirmIsVisible)
    })
}