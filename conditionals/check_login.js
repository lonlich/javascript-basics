//https://javascript.info/logical-operators
//Write the code which asks for a login with prompt.

//If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

//The password is checked as follows:

//If it equals “TheMaster”, then show “Welcome!”,
//Another string – show “Wrong password”,
//For an empty string or cancelled input, show “Canceled”

const login = prompt("Who goes there?");

//if (login === null || login === "") {
  if (!(login)) {
  alert("Canceled");
} else if (!(login.trim() === "Admin")) {
  alert("I don't know you");
} else {
  const password = prompt("Enter your password");

  if (!(password)) {
    alert("Canceled");
  } else if (!(password.trim() === "TheMaster")) {
    alert("I don't know you");
  } else {
    alert("Welcome!");
  }
}