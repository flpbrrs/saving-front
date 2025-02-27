import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string()
        .email('O e-mail não está no formato esperado.')
        .nonempty('Informe o campo de e-mail.'),
    senha: z.string()
        .nonempty('Informe sua senha.')
        .min(6, 'Precisamos de uma senha maior, mínimo 6.')
})

export type loginFormData = z.infer<typeof loginFormSchema>