'use client'

import FormField from "@/components/formComponents/FormField"
import useRegisterFormHandler from "./registerForm.handler"
import HideShowIcon from "@/components/HideShowIcon"

interface RegisterFormProps {
    isInRegisterContext: boolean,
    toogleToLogin: () => void
}

export default function RegisterForm({ toogleToLogin, isInRegisterContext }: RegisterFormProps) {
    const {
        register,
        onSubmit,
        errors,
        passwordIsVisible,
        tooglePasswordVisibility,
        confirmIsVisible,
        toogleConfirmVisibility
    } = useRegisterFormHandler({ isInRegisterContext })

    function handleRedirectAfterSubmit(e: any) {
        e.preventDefault()
        onSubmit()
        toogleToLogin()
    }

    return (
        <form
            onSubmit={handleRedirectAfterSubmit} 
            className="w-full mt-4 flex flex-col gap-4 max-w-96"
        >
            <div className="flex gap-2 w-full">
                <FormField hasError={errors.nome}>
                    <FormField.Label htmlFor="register_nome">
                        Nome
                    </FormField.Label>
                    <FormField.Input
                        id="register_nome"
                        type="text"
                        {...register('nome')}
                    />
                    <FormField.Error>
                        {errors.nome?.message}
                    </FormField.Error>
                </FormField>

                <FormField hasError={errors.sobrenome}>
                    <FormField.Label htmlFor="register_sobrenome">
                        Sobrenome
                    </FormField.Label>
                    <FormField.Input
                        id="register_sobrenome"
                        type="text"
                        {...register('sobrenome')}
                    />
                    <FormField.Error>
                        {errors.sobrenome?.message}
                    </FormField.Error>
                </FormField>
            </div>
            <FormField hasError={errors.email}>
                <FormField.Label htmlFor="register_email">
                    E-mail
                </FormField.Label>
                <FormField.Input
                    id="register_email"
                    type="text"
                    {...register('email')}
                />
                <FormField.Error>
                    {errors.email?.message}
                </FormField.Error>
            </FormField>
            <div className="flex gap-2 w-full">
                <FormField hasError={errors.senha}>
                    <FormField.Label htmlFor="register_senha">
                        Senha
                    </FormField.Label>
                    <FormField.Input
                        id="register_senha"
                        type={passwordIsVisible ? 'text' : 'password'}
                        {...register('senha')}
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

                <FormField hasError={errors.confirmarSenha}>
                    <FormField.Label htmlFor="register_confirmarSenha">
                        Confirmar Senha
                    </FormField.Label>
                    <FormField.Input
                        id="register_confirmarSenha"
                        type={confirmIsVisible ? 'text' : 'password'}
                        {...register('confirmarSenha')}
                    />
                    <FormField.EndAdornment>
                        <HideShowIcon
                            isVisible={confirmIsVisible}
                            onToogle={toogleConfirmVisibility}
                        />
                    </FormField.EndAdornment>
                    <FormField.Error>
                        {errors.confirmarSenha?.message}
                    </FormField.Error>
                </FormField>
            </div>
            <button type="submit" className="app-btn">
                Criar conta
            </button>
        </form>
    )
}