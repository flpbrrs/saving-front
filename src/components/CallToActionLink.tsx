interface CTAProps {
    label: string
    CTA: string
    action: () => void
}

export default function CallToActionLink(props: CTAProps) {
    return (
        <div className="text-sm font-thin text-gray-500 hover:cursor-pointer select-none" onClick={props.action}>
            <span className="hover:underline">{props.label}</span>
            <span className="bg-zinc-200 ml-1 py-1 px-2 rounded-lg bg-opacity-30 backdrop-blur-sm border-neutral-800/30">
                {props.CTA}
            </span>
        </div>
    )
}