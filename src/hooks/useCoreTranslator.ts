type FieldTranslator = Record<string, string>
type ErrorMessageTranslator = Record<string, string>

const fieldTranslator: FieldTranslator = {
    name: 'nome',
    email: 'email',
    password: 'senha',
    surname: 'sobrenome',
}

const messageTranslator: ErrorMessageTranslator = {
    empty: 'não pode ser vazio.',
    invalid: 'está inválido.',
    weak: 'precisa conter números, caracteres especiais, letras maiúsculas e minúsculas.',
    'missing-surname': 'está faltando o sobrenome',
    'server-error': 'erro interno no servidor.',
    'too-short': 'é muito pequeno.',
    'user-already-exists': 'Este e-mail já está em uso.',
    'invalid-credentials': 'Credenciais inválidas.'
}

interface TranslatedError {
    field: string
    error: {
        type: 'manual'
        message: string
    }
}

export default function useCoreTranslator() {
    function parse(message: string): TranslatedError[] {
        if (!message || typeof message !== 'string') return []

        return message.split(',').map((error) => {
            const [field, code] = error.split('.')
            const campo = fieldTranslator[field] ?? field
            const mensagem = messageTranslator[code] ?? code

            if (campo === 'root') {
                return {
                    field: "root",
                    error: {
                        type: 'manual',
                        message: `${mensagem}`,
                    },
                }
            }

            return {
                field: campo,
                error: {
                    type: 'manual',
                    message: `O campo ${campo} ${mensagem}`,
                },
            }
        })
    }

    return { parse }
}
