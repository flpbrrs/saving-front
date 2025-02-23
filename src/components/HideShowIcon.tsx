import { TbEye, TbEyeClosed } from "react-icons/tb";

interface IconProps {
    isVisible: boolean
    onToogle: () => void
    size?: number
}

export default function HideShowIcon({
    isVisible,
    onToogle,
    size = 24
}: IconProps) {
    return (
        <button
            type="button"
            onClick={onToogle}
        >
            {isVisible ?
                <TbEye size={size} /> :
                <TbEyeClosed size={size} /> }
        </button>
    )
}