//Create a tagged template literal function called formatCurrency that formats a given number as currency. The function should accept a currency symbol and a number, then return a formatted currency string with two decimal places.

const currencySymbol = prompt('Enter your currency symbol');
const currencyAmount = +prompt('How much currency do you have?');

function formatCurrency(strings, currencySymbolExp, currencyAmountExp) {
    const formatted = currencyAmountExp.toFixed(2);
    return `${strings[0]}${currencySymbolExp}${formatted}`
}

const message = formatCurrency`You have ${currencySymbol}${currencyAmount}`;

alert(message);