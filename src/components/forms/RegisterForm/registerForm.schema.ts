import { z } from "zod";

export const registerFormSchema = z.object({
    nome: z.string()
        .nonempty('É preciso informar seu nome')
        .min(2, 'Mínimo de 2 caracteres'),
    sobrenome: z.string()
        .nonempty('Preciso informar pelo menos 1 sobrenome')
        .min(2, 'Mínimo de 2 caracteres'),
    email: z.string()
        .email('O e-mail não está no formato esperado.')
        .nonempty('Informe o campo de e-mail.'),
    senha: z.string()
        .nonempty('Informe uma senha.')
        .min(6, 'Precisamos de uma senha maior, mínimo 6.'),
    confirmarSenha: z.string()
        .nonempty('Confirme sua senha.')
        .min(6, 'Precisamos de uma senha maior, mínimo 6.')
}).superRefine(({ senha, confirmarSenha }, ctx) => {
    if (senha !== confirmarSenha) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'As senhas precisam ser iguais',
            path: ['confirmarSenha']
        })
    }
})

export type registerFormData = z.infer<typeof registerFormSchema>