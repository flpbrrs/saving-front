'use client'

import FormField from "@/components/formComponents/FormField";
import HideShowIcon from "@/components/HideShowIcon";
import useLoginFormHandler from "./loginForm.handler";
import { TbLoader2 as IconSpin } from 'react-icons/tb'

interface LoginFormProps {
    isInLoginContext: boolean
}

export default function LoginForm({ isInLoginContext }: LoginFormProps) {
    const {
        register,
        onSubmit,
        errors,
        isSubmitting,
        passwordIsVisible,
        tooglePasswordVisibility
    } = useLoginFormHandler({ isInLoginContext })

    return (
        <form
            onSubmit={onSubmit}
            className="w-full mt-4 flex flex-col gap-4 max-w-96"
        >   
            <FormField hasError={errors.email}>
                <FormField.Label htmlFor="login_email">E-mail</FormField.Label>
                <FormField.Input
                    id="login_email"
                    {...register('email', { required: "Informe o campo E-mail"})}
                />
                <FormField.Error>
                    {errors.email?.message}
                </FormField.Error>
            </FormField>

            <FormField hasError={errors.senha}>
                <FormField.Label htmlFor="login_senha">Senha</FormField.Label>
                <FormField.Input
                    id="login_senha"
                    type={passwordIsVisible ? 'text' : 'password'}
                    {...register('senha', { required: 'Informe o campo Senha'})}
                />
                <FormField.EndAdornment>
                    <HideShowIcon
                        isVisible={passwordIsVisible}
                        onToogle={tooglePasswordVisibility}
                    />
                </FormField.EndAdornment>
                <FormField.Error>
                    {errors.senha?.message}
                </FormField.Error>
            </FormField>

            <div className="text-center">
                <FormField.Error>
                    {errors.root?.message}
                </FormField.Error>
            </div>

            <button type="submit" className="app-btn" disabled={isSubmitting}>
                { isSubmitting && <IconSpin className="animate-spin"/>}
                <span>Login</span>
            </button>
        </form>
    )
}