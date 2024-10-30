//Math functions for each operation type

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

//vars declaration
let result = null;
let operation = null;

let calculations = [];
let currentCalc = null;
let lastCalc = null;
let operationOver = false;
let numInput = "";
let log = "";

//DOM constants
const numbers = document.querySelector("#numbers");
const operations = document.querySelector("#operations");
const equals = document.querySelector("#equals");

//Repeated equals button press logic
function repeatOperation() {
    calculations.push({
        num1: currentCalc.result,
        num2: currentCalc.num2,
        operation: currentCalc.operation,
      });
    
      currentCalc = calculations[calculations.length - 1];
      result = operate(currentCalc.num1, currentCalc.num2, currentCalc.operation);
}

//Logic for chained calculations
function performMultipleCalculations(arr, operation) {
    arr.forEach((obj) => {
        result = operate(obj.num1, obj.num2, obj.operation);
    
        console.log("array at equals end");
        console.table(arr);
      });
}

//Determine what math function to use based on the pressed operation button
function getOperationFunction(operation) {
    switch (operation) {
        case "+":
          operationFunction = add;
          break;
    
        case "-":
          operationFunction = subtract;
          break;
    
        case "x":
          operationFunction = multiply;
          break;
    
        case "/":
          operationFunction = divide;
          break;
      }
      
      return operationFunction;
}


//Logic for a single calculation with two operands
function operate(input1, input2, operation) {
  let operationFunction = getOperationFunction(operation);
  currentCalc.result = operationFunction(input1, input2, operation);
  console.log("array at operate end (inside)");
  console.table(calculations);
}

function addLogMessage() {
    
}

//BUTTON HANDLERS

//Number selection
numbers.addEventListener("click", (e) => {
  numInput += e.target.textContent;
});

//Operation selection
operations.addEventListener("click", (e) => {
  console.log("array at operations start");
  console.table(calculations);

  operationOver = false;

  if (numInput) {
    calculations.push({
      num1: +numInput,
      num2: null,
      operation: e.target.textContent,
    });
    numInput = "";
    return;
  }

  calculations.push({
    num1: null,
    num2: null,
    operation: e.target.textContent,
  });

  lastCalc = calculations[calculations.length - 2];
  currentCalc = calculations[calculations.length - 1];

  if (!lastCalc) {
    currentCalc.num1 = +numInput;
    numInput = "";
    return;
  }
  currentCalc.num1 = lastCalc.result;
  numInput = "";
  console.log("array at operations end");

  console.table(calculations);
});

//Equals button functionality
equals.addEventListener("click", () => {
  if (operationOver) { //executes if equals button was pressed again with no numbers entered = repeat the same operation
    repeatOperation();
    return;
  }
  currentCalc = calculations[calculations.length - 1];
  currentCalc.num2 = +numInput;
  numInput = "";

  performMultipleCalculations(calculations, operation);

  operationOver = true;
});


//Basic visual feedback on the buttons
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