
//4 функции для каждой операции. Принимают 2 числа

//создать переменные 
//функция operate, которая принимает 2 числа и тип оператора

function add(num1, num2) {
    console.log(`${num1} + ${num2} = ${result}`);
    return num1 + num2;
}

function subtract(num1, num2) {
    console.log(`${num1} - ${num2} = ${result}`);
    return num1 - num2;
}

function multiply(num1, num2) {
    console.log(`${num1} * ${num2} = ${result}`);
    return num1 * num2;
}

function divide(num1, num2) {
    console.log(`${num1} / ${num2} = ${result}`);
    return num1 / num2;
}

function render() {

}

let num1 = null;
let num2 = null;
let result = null;

function operate(num1 = result, num2, operation) {

    switch (operation) {
        case '+':
        result = add(num1, num2);
        
        case '-':
        result = subtract(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        case 'x':
        result = multiply(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        case '/':
        result = add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
    }


    if (operation === 'add') {
        result = add(num1, num2);
        console.log(`${num1} + ${num2} = ${result}`);
        
    }
}

const numbers = document.querySelector('#numbers');

numbers.addEventListener('click', (e) => {
    
    if (!num1) {
        num1 = +e.target.textContent;
    }

    num2 = +e.target.textContent;
    console.log(num2);
});

operate(1, 2, 'add');
operate(undefined, 2, 'add');
operate(undefined, 10, 'add');