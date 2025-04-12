import AppBanner from "../AppBanner";
import TransctionTypeIcon from "../TransactionTypeIcon";
import {
    TbPlus as IconPlus,
    TbChevronLeft as IconLeft,
    TbChevronRight as IconRight,
    TbCashRegister,
} from "react-icons/tb"

export default function TransactionSkelleton() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            <AppBanner nomeUsuarioLogado="user"/>
            <section className="max-w-5xl mx-auto -mt-8 z-10 flex flex-col gap-4 pb-8">
                <div className="card">
                    <div className="grid grid-flow-row grid-cols-4 items-center">
                        <div className="p-4 border-r border-zinc-100 relative h-full">
                            <p className="text-sm text-zinc-400 mb-4">
                                Total de Recebimentos
                            </p>
                            <div className="h-6 py-2 w-32 pulse"/>
                            <div className="absolute top-2 right-4">
                                <TransctionTypeIcon type="income"/>
                            </div>
                        </div>
                        <div className="p-4 border-r border-zinc-100 relative h-full">
                            <p className="text-sm text-zinc-400 mb-4">
                                Total de Gastos
                            </p>
                            <div className="h-6 py-2 w-32 pulse"/>
                            <div className="absolute top-2 right-4">
                                <TransctionTypeIcon type="expense"/>
                            </div>
                        </div>
                        <div className="p-4 h-full col-span-2">
                            <p className="text-sm text-zinc-400 mb-3">
                                Análise de gastos
                            </p>
                            <div className="flex flex-col">
                                <div className="h-3 w-full mb-2"/>
                                <div>
                                    <div className="flex gap-1 items-center my-1">
                                        <div className={`size-2 rounded-full`} />
                                        <div className="h-4 py-2 w-24"/>
                                    </div>
                                    <div className="h-4 py-2 w-24 ml-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="mb-4 mx-5 flex justify-between items-center select-none">
                        <p className="text-xl font-bold">
                            Histórico de transação 
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button className="p-1 rounded-sm hover:bg-zinc-100" disabled>
                                    <IconLeft />
                                </button>
                                <p>{(new Date().getMonth() + 1).toString().padStart(2, '0')}/{new Date().getFullYear()}</p>
                                <button className="p-1 rounded-sm hover:bg-zinc-100" disabled>
                                    <IconRight />
                                </button>
                            </div>
                            <button
                                disabled
                                className="
                                    bg-emerald-400 px-2 py-1 rounded-lg 
                                    text-gray-100 font-bold 
                                    flex items-center gap-2 h-8
                                    hover:bg-emerald-500 hover:scale-[101%]"
                                >
                                <IconPlus />
                                Nova transação
                            </button>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 select-none">
                            <thead className="text-xs text-gray-700 uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Descrição
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        valor
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Data
                                    </th>
                                    <th scope="col" className="px-6 py-3"/>
                                </tr>
                            </thead>
                        </table>
                        <div className="flex items-center justify-center flex-col gap-1 text-lg text-zinc-300 h-24">
                            <TbCashRegister size={24}/>
                            <div>
                                Sem transações...
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}