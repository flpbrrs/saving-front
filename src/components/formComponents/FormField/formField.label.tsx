import { LabelHTMLAttributes } from "react";

export default function Label (props: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label 
            {...props}
            className="
                absolute top-2 px-2 z-10 start-1 bg-white
                duration-300 transform -translate-y-4 scale-75 origin-[0]
                peer-focus:bg-white peer-focus:text-emerald-500
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:-translate-y-1/2
                peer-placeholder-shown:top-1/2
                peer-focus:top-2 peer-focus:scale-75
                peer-focus:-translate-y-4"
        /> 
    )
}