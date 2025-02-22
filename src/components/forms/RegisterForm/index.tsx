'use client'

import OutlinedContainerInput from "@/components/formComponents/OutlinedInput";
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

export default function RegisterForm() {
    const [showPassword, setPassordVisibility] = useState(false);

    return (
        <form className="w-full mt-4 flex flex-col gap-4 max-w-96">
            <div className="flex gap-2">
                <OutlinedContainerInput>
                    <OutlinedContainerInput.Input id="register_nome" floatlabel="Nome"/>
                </OutlinedContainerInput>
                <OutlinedContainerInput>
                    <OutlinedContainerInput.Input id="register_sobrenome" floatlabel="Sobrenome"/>
                </OutlinedContainerInput>
            </div>
            <OutlinedContainerInput>
                <OutlinedContainerInput.Input id="register_email" floatlabel="E-mail"/>
            </OutlinedContainerInput>
            <OutlinedContainerInput>
                <OutlinedContainerInput.Input id="register_senha" floatlabel="Senha" type={showPassword ? 'text' : 'password'}/>
                <OutlinedContainerInput.Addon>
                    <button type="button"  onClick={() => setPassordVisibility(!showPassword)}>
                        {showPassword ? <TbEye size={24} /> : <TbEyeClosed size={24} /> }
                    </button>
                </OutlinedContainerInput.Addon>
            </OutlinedContainerInput>
            <OutlinedContainerInput>
                <OutlinedContainerInput.Input id="register_confirma" floatlabel="Confirmar senha" type={showPassword ? 'text' : 'password'}/>
                <OutlinedContainerInput.Addon>
                    <button type="button"  onClick={() => setPassordVisibility(!showPassword)}>
                        {showPassword ? <TbEye size={24} /> : <TbEyeClosed size={24} /> }
                    </button>
                </OutlinedContainerInput.Addon>
            </OutlinedContainerInput>
            <button type="submit" className="app-btn">
                Criar conta
            </button>
        </form>
    )
}