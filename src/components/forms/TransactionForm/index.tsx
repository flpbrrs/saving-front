import FormField from "@/components/formComponents/FormField";
import { Dialog } from "radix-ui"
import { TbLoader2 as IconSpin } from 'react-icons/tb'
import useTransactionFormHandler from "./transaction.Form.handler";
import { Controller } from "react-hook-form";
import { applyMoneyMask } from "@/masks/applyMoneyMask";

interface FormProps {
    onSuccess: () => void
}

export default function TransactionForm(props: FormProps) {
    const {
        register,
        onSubmit,
        errors,
        isSubmitting,
        control
    } = useTransactionFormHandler({
        submitCallback: () => props.onSuccess()
    })

    return (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-4">
            <FormField hasError={errors.titulo}>
                <FormField.Label htmlFor="transaction_title">
                    Título
                </FormField.Label>
                <FormField.Input
                    id="transaction_title"
                    type="text"
                    {...register('titulo')}
                />
                <FormField.Error>
                    {errors.titulo?.message}
                </FormField.Error>
            </FormField>
            <FormField hasError={errors.descricao}>
                <FormField.Label htmlFor="transaction_description">
                    Descrição
                </FormField.Label>
                <FormField.Input
                    id="transaction_description"
                    type="text"
                    {...register("descricao")}
                />
                <FormField.Error>
                    {errors.descricao?.message}
                </FormField.Error>
            </FormField>
            <Controller
                name="valor"
                control={control}
                render={({ field }) => (
                    <FormField hasError={errors.valor}>
                        <FormField.Label htmlFor="transaction_value">
                            Valor
                        </FormField.Label>
                        <FormField.Input
                            id="transaction_value"
                            value={field.value ?? ""}
                            onChange={(event) =>
                                field.onChange(applyMoneyMask(event.target.value))
                            }
                        />
                        <FormField.Error>
                            {errors.valor?.message}
                        </FormField.Error>
                    </FormField>
                )}
            />
            <FormField hasError={errors.data}>
                <FormField.Label htmlFor="transaction_date">
                    Data de realização
                </FormField.Label>
                <FormField.Input
                    id="transaction_date"
                    type="date"
                    {...register('data')}
                />
                <FormField.Error>
                    {errors.data?.message}
                </FormField.Error>
            </FormField>
            <FormField hasError={errors.tipo}>
                <FormField.Label htmlFor="transaction_type">Tipo</FormField.Label>
                <FormField.Select 
                    id="transaction_type"
                    {...register("tipo")}
                >
                    <option value="" disabled>Selecione uma opção...</option>
                    <option value="income">Entrada</option>
                    <option value="expense">Saída</option>
                </FormField.Select>
                <FormField.Error>{errors.tipo?.message}</FormField.Error>
            </FormField>
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-end gap-4">
                <Dialog.Close className="text-zinc-400">
                    Cancelar
                </Dialog.Close>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="
                        bg-emerald-400 px-2 py-1 rounded-lg 
                        text-gray-100 font-bold 
                        flex items-center gap-2 h-8
                        hover:bg-emerald-500"
                >
                    { isSubmitting && <IconSpin className="animate-spin"/>}
                    <span>Registrar</span>
                </button>
            </div>
        </form>
    )
}