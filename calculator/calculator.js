
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

let num1 = null;
let num2 = null;
let result = null;
let operation = null;
let firstNumAssigned = false;

function operate(input1, input2, operation) {
    console.log(`num1 before switch: ${num1}`);
    
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
    result = operationFunction(input1, input2);
    console.log(`${input1} ${operation} ${input2} = ${result}`);
    
    
    firstNumAssigned = false;
}

const numbers = document.querySelector('#numbers');
let num1Input = '';

numbers.addEventListener('click', (e) => {
    if (!firstNumAssigned) {
        
        num1Input += e.target.textContent;
        num1 = +num1Input;

        //firstNumAssigned = true;
        console.log(num1);
    } else {
        num2 = +e.target.textContent;
        console.log(num2);
    }
});


const operations = document.querySelector('#operations');
operations.addEventListener('click', (e) => {
    firstNumAssigned = true;    
    operation = e.target.textContent;

});

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    console.log(`num1 inside ev ${num1}`);
    if (!firstNumAssigned) {
        num1 = result;
    }
    operate(num1, num2, operation);
    num1 = result;
    num1Input = '';
});

// operate(1, 2, '+');
// operate(undefined, 5, '+');
// operate(undefined, 10, 'add');

//undefined не работает (значение всегда присваивается)