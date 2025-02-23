import { InputHTMLAttributes } from "react"

export interface ContainerProps {
    hasError?: any,
    children?: React.ReactNode
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface AdornmentProps {
    children: React.ReactNode
}

export interface ComponentStructure {
    Input: React.ReactNode | null
    Label: React.ReactNode | null
    EndAdornment: React.ReactNode | null
    Error: React.ReactNode | null
}
