//Capitalize first char of string

function capitalizeFirstChar(input) {
  if (!input) {
    return "No string entered";
  }

  const firstChar = input.charAt(0).toUpperCase();
  const rest = input.slice(1).toLowerCase();
  const result = firstChar.concat(rest);
  return result;
}

export { capitalizeFirstChar };
