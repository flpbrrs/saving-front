import { AdornmentProps } from "./formField.interfaces";

export default function Adornment (props: AdornmentProps) {
    return (
        <div className="
            flex items-center justify-center 
            peer-focus:text-emerald-500"
        >
            {props.children}
        </div>
    )
}