'use client'

import { useEffect, useState } from "react";
import { Path, useForm } from "react-hook-form";
import { loginFormData, loginFormSchema } from './loginForm.schema'
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@/hooks/useAuth";
import useCoreTranslator from "@/hooks/useCoreTranslator";

interface loginHandlerProps {
    isInLoginContext: boolean
}

export default function useLoginFormHandler(props: loginHandlerProps) {
    const [passwordIsVisible, setPasswordVisibility] = useState(false);
    const { parse } = useCoreTranslator()
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
            const translatedErrors = parse(e.message)
            translatedErrors.forEach(({ field, error }) => {
                setError(field as Path<loginFormData>, error)
            })
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
