import { TbPigMoney as IconIncome, TbCash as IconExpense } from "react-icons/tb"

export interface TransactionTypeIconProps {
    type: "expense" | "income"
}

export default function TransctionTypeIcon(props: TransactionTypeIconProps) {
    return (
        <>
            {props.type === 'expense' ? (
                <div className="p-2 bg-red-100/40 w-fit rounded-lg text-red-300">
                    <IconExpense size={20} />
                </div>
            ) : (
                <div className="p-2 bg-emerald-100/40 w-fit rounded-lg text-emerald-300">
                    <IconIncome size={20} />
                </div>
            )}
        </>
    )
}