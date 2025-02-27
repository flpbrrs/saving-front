import extractSubComponents from "@/utils/ExtractSubComponents"
import { ComponentStructure, ContainerProps } from "./formField.interfaces"
import React from "react"
import Input from "./formField.input"
import Label from "./formField.label"
import Adornment from "./formField.adornment"
import Error from "./formField.error"

function FormField(props: ContainerProps) {
    const ff = extractSubComponents<ComponentStructure>(
        React.Children.toArray(props.children),
        FormField
    )

    return (
        <div className="flex flex-col gap-1 w-full">
            <div className={`
                flex gap-2 relative px-2.5 py-2 w-full
                text-sm border rounded-lg
                focus-within:border-emerald-500
                focus-within:text-zinc-900
                ${props.hasError 
                    ? "border-red-500 text-red-500"
                    : "border-gray-500 text-gray-500"}    
            `}>
                {ff.Input}
                {ff.Label}
                {ff.EndAdornment}
            </div>
            {ff.Error}
        </div>
    )
}

FormField.Input = Input
FormField.Label = Label
FormField.EndAdornment = Adornment
FormField.Error = Error

export default FormField 