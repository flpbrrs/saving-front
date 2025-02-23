import { InputProps } from "./formField.interfaces";

export default function Input (props: InputProps) {
    return (
        <input
            {...props}
            className="
                min-h-8 w-full bg-transparent
                focus:outline-none focus:ring-0 peer"
            placeholder=" "
        />
    )
}