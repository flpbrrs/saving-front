import { Dialog } from "@radix-ui/themes";
import {TbPlus as IconPlus} from "react-icons/tb"

interface DialogProps {
    children?: React.ReactNode
}

export default function NewTransactionDialog(props: DialogProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <button className="
                    bg-emerald-400 px-2 py-1 rounded-lg 
                    text-gray-100 font-bold 
                    flex items-center gap-2 h-8
                    hover:bg-emerald-500 hover:scale-[101%]
                ">
                    <IconPlus />
                    Nova transação
                </button>
            </Dialog.Trigger>  

            <Dialog.Content maxWidth="450px">
                <Dialog.Title className="text-emerald-400">Nova transação</Dialog.Title>
                <Dialog.Description size="2" mb="4" className="text-zinc-400">
                    Registre sua nova movimentação financeira.
                </Dialog.Description>
                {props.children}
            </Dialog.Content>
        </Dialog.Root>
    )
}