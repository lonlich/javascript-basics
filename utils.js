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

export {
        capitalizeFirstChar, 
        getButtonValue, 
        random 
      };
