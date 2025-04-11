import { z } from "zod"

export const transactionFormSchema = z.object({
    titulo: z
        .string()
        .nonempty("O título é obrigatório")
        .min(2, "Mínimo de 2 caracteres")
        .max(100, "Máximo de 100 caracteres"),

    descricao: z
        .string()
        .max(500, "Máximo de 500 caracteres")
        .optional(),

    valor: z
        .string({ required_error: "O valor é obrigatório" })
        .transform((val) => {
            const onlyDigits = val.replace(/[^\d,]/g, '');
            const normalized = onlyDigits.replace(',', '.');
            return parseFloat(normalized);
        })
        .refine((val) => !isNaN(val), {
            message: "O valor deve ser numérico",
        })
        .refine((val) => val > 0, {
            message: "O valor deve ser maior que zero",
        }),

    data: z
        .string()
        .nonempty("A data é obrigatória")
        .refine((date) => !isNaN(Date.parse(date)), {
            message: "Data inválida",
        }),

    tipo: z
        .enum(["income", "expense"], {
            errorMap: () => ({ message: "Tipo deve ser 'entrada' ou 'saida'" }),
        })
})

export type transactionFormData = z.infer<typeof transactionFormSchema>