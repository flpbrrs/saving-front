import TransctionTypeIcon from "./TransactionTypeIcon";

interface CardProps {
    label: string
    value: number
    type: "expense" | "income"
}

export default function TransactionInfoCard(props: CardProps) {
    return (
        <div className="p-4 border-r border-zinc-100 relative h-full">
            <p className="text-sm text-zinc-400">{props.label}</p>
            <p className="text-2xl py-2 font-semibold">
                R$ {props.value.toFixed(2)}
            </p>
            <div className="absolute top-2 right-4">
                <TransctionTypeIcon type={props.type}/>
            </div>
        </div>
    )
}