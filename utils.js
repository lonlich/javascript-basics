//capitalize the first char of a string
function capitalizeFirstChar(input) {
  if (!input) {
    return "No string entered";
  }

  const firstChar = input.charAt(0).toUpperCase();
  const rest = input.slice(1).toLowerCase();
  const result = firstChar.concat(rest);
  return result;
}

//get the value of a clicked button
const getButtonValue = (e) => e.target.value;

//get random number from 0 to maxNumber - 1
function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

//check two arrays for equality
function checkArrEquality(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  
  return true;
}

//check if a character an alphabet letter (true/false)
function isAlphabetLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

export {
        capitalizeFirstChar, 
        getButtonValue, 
        random,
        checkArrEquality
      };



//Полезные команды

//Запустить тест - npm test helloWorld.spec.js