'use client'

import OutlinedContainerInput from "@/components/formComponents/OutlinedInput";
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

export default function LoginForm() {
    const [showPassword, setPassordVisibility] = useState(false);

    return (
        <form className="w-full mt-4 flex flex-col gap-4 max-w-96">
            <OutlinedContainerInput>
                <OutlinedContainerInput.Input id="login_email" floatlabel="E-mail"/>
            </OutlinedContainerInput>
            <OutlinedContainerInput>
                <OutlinedContainerInput.Input id="login_senha" floatlabel="Senha" type={showPassword ? 'text' : 'password'}/>
                <OutlinedContainerInput.Addon>
                    <button type="button"  onClick={() => setPassordVisibility(!showPassword)}>
                        {showPassword ? <TbEye size={24} /> : <TbEyeClosed size={24} /> }
                    </button>
                </OutlinedContainerInput.Addon>
            </OutlinedContainerInput>
            <button type="submit" className="app-btn">
                Login
            </button>
        </form>
    )
}