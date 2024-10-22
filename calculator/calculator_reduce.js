
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
let nums = [];
let operationsLog = [];
let operationOver = false;

function operate(operations) {
    let message = `${nums[0]}`;
    result = nums[0];
    operations.forEach((currentOperation, index) => {
        
        let operationFunction;
    
        switch (currentOperation) {
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
        
        result = operationFunction(result, nums[index + 1]);

        // result = nums.reduce((currentRes, currentNum) => {
        //     console.log(currentRes, currentNum);
        //     return operationFunction(currentRes, currentNum);
        // });

        message += ` ${currentOperation} ${nums[index + 1]}`;
    });
    
    console.log(`${message} = ${result}`);
    
}

const numbers = document.querySelector('#numbers');
let numInput = '';

numbers.addEventListener('click', (e) => {
        
        numInput += e.target.textContent;
        num = +numInput;

        console.log(nums);
});

const operations = document.querySelector('#operations');
operations.addEventListener('click', (e) => { 
    if (!operationOver) {
        nums.push(num);
        operationOver = false;
    }
    numInput = '';  
    operation = e.target.textContent;
    operationsLog.push(operation);
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (operationOver) {
        operationsLog = [operation];
    }
    nums.push(num);
    numInput = '';
    operate(operationsLog);
    nums = [result];
    operationsLog = [];
    operationOver = true;
});








// operate(1, 2, '+');
// operate(undefined, 5, '+');
// operate(undefined, 10, 'add');

//undefined не работает (значение всегда присваивается)

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        const item = e.target;

        item.style.backgroundColor = 'red';
        console.log(`Pressed ${item.textContent}`);
    });
    
    button.addEventListener('mouseup', (e) => {
        const item = e.target;
        item.style.backgroundColor = '';
    });
});
