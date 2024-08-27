//Exercise: Create a tagged template literal function called statusMessage that takes a user’s status ("online" or "offline") and a user name. The function should return a message indicating whether the user is online or offline, such as "Bob is currently online."

const status = prompt('Your status');
const username = prompt('Your username');

function statusMessage(strings, usernameExp, statusExp) {
    return `${usernameExp}${strings[1]}${statusExp}`;
}

const message = statusMessage`${username} is currently ${status}`;

alert(message);