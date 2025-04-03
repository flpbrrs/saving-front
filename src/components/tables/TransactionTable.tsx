import TransctionTypeIcon from "../TransactionTypeIcon";

import { TbDotsVertical as IconMoreItems, TbCashRegister} from "react-icons/tb"

interface TableProps {
    data: any[] | undefined
}

export default function TransactionTable(props: TableProps) {
    return (
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
                <tbody>
                    {props.data && props.data.map(transacao => (
                        <tr key={transacao.id} className="border-b border-gray-200 last:border-none">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap w-full flex gap-4 items-center">
                                <TransctionTypeIcon type={
                                    transacao.tipo === 'expense' 
                                        ? 'expense' 
                                        : 'income'
                                }/>
                                <div>
                                    <p>{transacao.titulo}</p>
                                    <small className="text-zinc-400">
                                        {transacao.descricao.toUpperCase()}
                                    </small>
                                </div>
                            </th>
                            <td className="px-6 py-4 min-w-32">
                                R${transacao.valor.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 min-w-32">
                                {String(transacao.data).split('T')[0].split('-').reverse().join('/')}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="hover:bg-zinc-500/5 p-1 rounded-full">
                                    <IconMoreItems size={16}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {props.data?.length === 0 && (
                <div className="flex items-center justify-center flex-col gap-1 text-lg text-zinc-300 h-24">
                    <TbCashRegister size={24}/>
                    <div>
                        Sem transações...
                    </div>
                </div>  
            )}
        </div>
    )
}