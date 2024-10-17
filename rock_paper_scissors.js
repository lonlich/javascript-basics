//UTILITY FUNCTIONS

//get random array index between two boundaries
function getRandomIndex(min, max) {
  const randomIndex = Math.floor(Math.random() * (max + 1 - min)) + min;
  return randomIndex;
}

//get the value of a clicked button
const getButtonValue = (e) => e.target.value;

//GAME LOG FUNCTIONALITY 

const log = document.querySelector('#log');
let logMessages = [];

function addLogMessage(message) {
  const index = logMessages.length;
  logMessages.push(message);
  appendMessage(index, message);
};

function removeLogMessage(index) {
  logMessages.splice(index, 1);
}



function appendMessage(index, message) {
    const li = document.createElement('li');
    li.setAttribute('data-index', index);
    li.textContent = message;
    log.appendChild(li);
    addDeleteButton(li, index);
  };

//add delete button
function addDeleteButton(elem, index = null) { 
  // elem is the element that delete button is tied to
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  elem.appendChild(deleteBtn);

  if (elem === log) {      
    deleteBtn.addEventListener('click', () => {
      clearLog();
      clearLogMessages();
    });
  } else { 
    deleteBtn.addEventListener('click', () => {
      removeMessage(index);
      removeLogMessage(index);
    });
  }
}


function removeMessage (index) {
  const liToRemove = document.querySelector(`li[data-index="${index}"]`);
  liToRemove.remove();
};

function clearLog() {
  log.innerHTML = '';
};

function clearLogMessages() {
  logMessages = [];
};


//MAIN GAME LOGIC
//with async functionality waiting for the button click with the user choice
async function playGame(rounds = 3) {
  
  //number of rounds input validation
  if (typeof rounds !== "number") {
    throw new Error(
      "Invalid parameter: rounds must be a number. Example usage: playGame(3)"
    );
  }
  //vars init
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  const choices = ["rock", "paper", "scissors"];
  //const rounds = +prompt(`Enter number of rounds`); //optional functionality to receive # of rounds as user input

  addLogMessage(`Starting the game with ${rounds} rounds.`);

  //get random computer choice
  function getComputerChoice() {
    const computerChoice = choices[getRandomIndex(0, choices.length - 1)];
    return computerChoice;
  }

  //get the user's choice from button clicks
  function getHumanChoice() {
    return new Promise((resolve) => {
      rockBtn.addEventListener("click", (e) => resolve(getButtonValue(e)));
      paperBtn.addEventListener("click", (e) => resolve(getButtonValue(e)));
      scissorsBtn.addEventListener("click", (e) => resolve(getButtonValue(e)));
    });
  }

  //one round logic
  const playRound = function (computerChoice, humanChoice) {
    addLogMessage(
      `Computer choice: ${computerChoice}, Human choice: ${humanChoice}`
    );

    if (computerChoice === humanChoice) {
      return "draw";
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "rock")
    ) {
      return "Computer won!";
    } else {
      return "Human won!";
    }
  };

  let humanScore = 0;
  let computerScore = 0;

  //function to show current score after each round
  function showScore() {
    addLogMessage(`Human score: ${humanScore}`);
    addLogMessage(`Computer score: ${computerScore}`);
  }

  //main loop with # of iterations = # of rounds. It controls the score counters of players and shows the current score after each round
  for (let index = 0; index < rounds; index++) {
    addLogMessage(`Round ${index + 1}`);
    addLogMessage(`Make your choice...`);
    const humanChoice = await getHumanChoice();
    const roundResult = playRound(getComputerChoice(), humanChoice);

    addLogMessage(roundResult);

    if (roundResult === "draw") {
      addLogMessage(`It's a draw!`);
    } else if (roundResult === "Computer won!") {
      computerScore++;
    } else if (roundResult === "Human won!") {
      humanScore++;
    }

    showScore();
  }

  //showing the final score when the game ends
  addLogMessage(`Final score: Human/Computer: ${humanScore}/${computerScore}`);
  addDeleteButton(log);
}

//get # of rounds from the select dropdown
const roundsSelector = document.querySelector("#rounds");
let rounds = +roundsSelector.value; //get default selected value
addLogMessage(`Default number of rounds: ${rounds}`);
roundsSelector.addEventListener("change", (e) => {
  rounds = +e.target.value;
  addLogMessage(`Number of rounds changed to ${rounds}`);
});

//start game button functionality
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => playGame(rounds));

//1. Добавить игру бота с ботом, человек с человеком
//2. переделать в объекты (результат раунда). Переделать компа и человека в player 1 и player 2.
//3. добавить возможность большего колва игроков (массив игроков)
//4. вынести в параметры кнопки (переделать в классы)
//5. сделать функцию для создания кнопок для разных типов игроков и игры
//6. добавить вариации в конфиг с выбором игры (колодец итд)
