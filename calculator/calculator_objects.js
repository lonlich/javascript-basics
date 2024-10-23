
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

let num = null;
let result = null;
let operation = null;

let calculations = {};

function operate(operations) {
    
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
    result = nums.reduce((currentRes, currentNum) => {
        console.log(currentRes, currentNum);
        return operationFunction(currentRes, currentNum, currentOperation);
    });
  
    console.log(message);
    
}

const numbers = document.querySelector('#numbers');
let numInput = '';

numbers.addEventListener('click', (e) => {        
        numInput += e.target.textContent;
        console.log(nums);
});


const operations = document.querySelector('#operations');
operations.addEventListener('click', (e) => { 
    calculations.push({
        num1 : +numInput,
        num2 : null,
        operation : e.target.textContent 
    })
    numInput = '';
    console.log(calculations);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    calculations[calculations.length - 1].num2 = +numInput;
    numInput = '';
    operate(operationsLog);
});

// operate(1, 2, '+');
// operate(undefined, 5, '+');
// operate(undefined, 10, 'add');

//undefined не работает (значение всегда присваивается)