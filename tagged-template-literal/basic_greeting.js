//Exercise: Create a tagged template literal function called greet that formats a greeting message. The function should take a person's name and return a message like "Hello, [name]!"

const username = prompt("Enter your name");

function greet(strings, usernameExp) {
  return `${strings[0]}${usernameExp}${strings[1]}`;
}

const message = greet`Hello, ${username}. You are welcome here :)`;

alert(message);