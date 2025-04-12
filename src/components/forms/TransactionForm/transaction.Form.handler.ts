'use client'

import { Path, useForm } from "react-hook-form"
import { transactionFormData, transactionFormSchema } from "./transactionForm.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import useNotification from "@/hooks/useNotification"
import useCoreTranslator from "@/hooks/useCoreTranslator"
import useCreateTransaction from "@/hooks/transactions/useCreateTransaction"

interface transactionHandlerProps {
    submitCallback: () => void
}

export default function useTransactionFormHandler(props: transactionHandlerProps) {
    const { parse } = useCoreTranslator()
    const { notify } = useNotification()
    const { mutateAsync: registerTransaction } = useCreateTransaction()

    const {
        register,
        handleSubmit,
        reset,
        setError,
        control,
        formState: { errors, isSubmitting }
    } = useForm<transactionFormData>({
        resolver: zodResolver(transactionFormSchema)
    })

    const onSubmit = handleSubmit(async (data) => {
        try {
            await registerTransaction(data)
            notify('Transação registrada!')
            reset()
            props.submitCallback()
        } catch (e: any) {
            console.log(e.response.data.erros)
            const translatedErrors = parse(e.response.data.erros)
            translatedErrors.forEach(({ field, error }) => {
                setError(field as Path<transactionFormData>, error)
            })
        }
    })

    return ({
        register,
        errors,
        onSubmit,
        isSubmitting,
        control
    })
}