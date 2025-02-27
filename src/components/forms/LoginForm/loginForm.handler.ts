'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginFormData, loginFormSchema } from './loginForm.schema'
import { zodResolver } from "@hookform/resolvers/zod";

export default function useLoginFormHandler() {
    const [passwordIsVisible, setPasswordVisibility] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSubmit = handleSubmit((data) => console.log(data))

    return ({
        register,
        errors,
        onSubmit,
        passwordIsVisible,
        tooglePasswordVisibility: () => setPasswordVisibility(!passwordIsVisible)
    })
}
