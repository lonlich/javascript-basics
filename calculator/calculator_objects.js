
//4 функции для каждой операции. Принимают 2 числа

//создать переменные 
//функция operate, которая принимает 2 числа и тип оператора

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// function getNumValue(e) {
//     const value += e.target.value;
// }


let result = null;
let operation = null;

let calculations = [];
let currentCalc = null;
let lastCalc = null;
let operationOver = false;

function operate(input1, input2, operation) {
    
    let operationFunction;

    switch (operation) {
        case '+': 
        operationFunction = add;
        break;
    
        case '-': 
        operationFunction = subtract;
        break;
    
        case 'x': 
        operationFunction = multiply;
        break;
    
        case '/': 
        operationFunction = divide;
        break;
    }
    //result = operationFunction(input1, input2);

    let message = '';
    //calculations[calculations.length - 1].currentRes = input1;
    currentCalc.result = operationFunction(input1, input2, operation);
    console.log('array at operate end (inside)');
    
    console.table(calculations);
    
}

const numbers = document.querySelector('#numbers');
let numInput = '';

numbers.addEventListener('click', (e) => {        
        numInput += e.target.textContent;
        
});


const operations = document.querySelector('#operations');
operations.addEventListener('click', (e) => { 
    console.log('array at operations start');
    console.table(calculations);

    operationOver = false;

    if (numInput) {
        calculations.push({
            num1 : +numInput,
            num2 : null,
            operation : e.target.textContent 
        });
        numInput = '';
        return;
    }

    calculations.push({
        num1 : null,
        num2 : null,
        operation : e.target.textContent 
    });

    lastCalc = calculations[calculations.length - 2];
    currentCalc = calculations[calculations.length - 1];

    if (!lastCalc) {
        currentCalc.num1 = +numInput;
        numInput = '';
        return;
    } 
    currentCalc.num1 = lastCalc.result;
    numInput = '';
    console.log('array at operations end');
    
    console.table(calculations);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (operationOver) {

        calculations.push({
            num1 : currentCalc.result,
            num2 : currentCalc.num2,
            operation : currentCalc.operation
        });

        currentCalc = calculations[calculations.length - 1];
        result = operate(currentCalc.num1, currentCalc.num2, currentCalc.operation);
        return;
    }
    currentCalc = calculations[calculations.length - 1];
    currentCalc.num2 = +numInput;
    numInput = '';

    calculations.forEach(currentCalc => {
        result = operate(currentCalc.num1, currentCalc.num2, currentCalc.operation);
    
        console.log('array at equals end');
        console.table(calculations);
    });
    operationOver = true;
});

// operate(1, 2, '+');
// operate(undefined, 5, '+');
// operate(undefined, 10, 'add');

//undefined не работает (значение всегда присваивается)