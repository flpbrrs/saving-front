'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { registerFormData, registerFormSchema } from "./registerForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"

export default function useRegisterFormHandler() {
    const [passwordIsVisible, setPasswordVisibility] = useState<boolean>(false)
    const [confirmIsVisible, setConfirmVisibility] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<registerFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = handleSubmit((data) => console.log(data))

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