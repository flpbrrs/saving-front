export function applyMoneyMask(value: string, withPrefix = true): string {
    let onlyDigits = value.replace(/\D/g, '');

    if (!onlyDigits) return '';

    const number = parseFloat(onlyDigits) / 100;

    const formatted = number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return withPrefix ? `R$ ${formatted}` : formatted;
}