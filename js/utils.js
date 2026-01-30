export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumSignificantDigits: 3
    }).format(amount);
};

export const dom = (selector) => document.querySelector(selector);
export const domAll = (selector) => document.querySelectorAll(selector);