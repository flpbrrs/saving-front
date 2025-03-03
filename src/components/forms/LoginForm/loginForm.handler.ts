'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loginFormData, loginFormSchema } from './loginForm.schema'
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/hooks/useAuth";

interface loginHandlerProps {
    isInLoginContext: boolean
}

export default function useLoginFormHandler(props: loginHandlerProps) {
    const [passwordIsVisible, setPasswordVisibility] = useState(false);
    const { login } = useAuth()

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    useEffect(() => {
        if (!props.isInLoginContext)
            reset()
    }, [props.isInLoginContext])

    const onSubmit = handleSubmit(async (data) => {
        try {
            await login(data.email, data.senha)
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
        tooglePasswordVisibility: () => setPasswordVisibility(!passwordIsVisible)
    })
}
