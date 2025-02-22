import { InputHTMLAttributes } from "react"

interface ContainerProps {
    children?: React.ReactNode
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    floatlabel?: string
}

function OutlinedContainerInput(props: ContainerProps) {
    return (
        <div className="flex gap-2 relative px-2.5 py-2 w-full text-sm border text-gray-900 bg-gray-50 rounded-lg border-gray-300 appearance-none focus-within:outline-none focus-within:ring-0 focus-within:border-emerald-600">
            {props.children}
        </div>
    )
}

OutlinedContainerInput.Input = (props: InputProps) => {
    return (<>
        <input
            {...props}
            className="block min-h-8 w-full bg-transparent appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
        />
        {props.floatlabel && <>
            <label 
                htmlFor={props.id}
                className="absolute text-sm bg-gray-50 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:bg-gray-50 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 select-none"
            >
                {props.floatlabel}
            </label>
        </>}
    </>)
}

OutlinedContainerInput.Addon = (props: any) => {
    return (
        <div className="flex items-center justify-center">
            {props.children}
        </div>
    )
}

export default OutlinedContainerInput;