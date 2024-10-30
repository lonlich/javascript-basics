/* eslint-disable no-undef */
// const nodeList = document.querySelectorAll('div');
// console.log(nodeList);
// const arr = Array.from(nodeList);
// console.log(arr);
// console.log(arr[4]);
// const arr1 = [...nodeList];
// console.log(arr1);
// const text = [{a: 1, b: 2, c: 3}, {d: 4}];
// const arr2 = [...text];
// console.log(arr2);
// const arr3 = Array.from(text);
// console.log(arr3);

const body = document.querySelector("body");
const divChild = document.createElement("div");
const p = document.querySelector("p");
body.appendChild(divChild);
//body.insertBefore(divChild, p);
//body.removeChild(divChild);

const divs = [...document.querySelectorAll("div")];

divs.forEach((div, index) => {
    console.log(`Content of div ${index + 1}: ${div.textContent}`);
});

//p.style['background-color'] = 'yellow';

p.setAttribute("id", "paragraph");
const x = p.getAttribute("id");
console.log(x);

p.classList.add("para-class");
p.classList.toggle("para-toggle");
p.innerText = "NEW TEXT";
console.log(p.innerText);
//p.innerHTML = '<div id="4">Text 4</div><div id="5">Text 6</div><div id="6">Text 6</div>';

// const blackBorderDiv = document.createElement('div');
// blackBorderDiv.textContent = 'Hey I\'m red';
// blackBorderDiv.style.color = 'red';

const container = document.querySelector('#container');


// const blackBorderDiv = document.createElement('div');
// blackBorderDiv.style.backgroundColor = 'pink';
// blackBorderDiv.style.borderColor = 'black';
// blackBorderDiv.innerHTML = '<h1>I\m in a div</h1><p>ME TOO</p>';
// container.appendChild(blackBorderDiv);

const objectDiv = document.createElement('div');
objectDiv.textContent = 'Object assigned styles';
Object.assign(objectDiv.style, {
    borderColor: 'red',
    //backgroundColor: 'blue'
});
container.appendChild(objectDiv);

const buttons = document.querySelectorAll('button');


const logTarget = (e) => {
    console.log(e.target);
    const x = 1 + 2;
    return x;
};

buttons.forEach(button => {
    //button.addEventListener('click', logTarget);
});

const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
//     e.preventDefault();
// });

// addEventListener('beforeunload', (e) => {
//     e.preventDefault();
//     e.returnValue = '';
//     alert('Are you sure');
// });

//custom highlight event
const highlightBtn = document.querySelector('#highlight');
const highlightedElem = document.querySelector('.note');
// 1. добавляем ивент листенер на кнопку баттон, которая запускает функцию хайлайта:
//     - принимает элемент для подсветки

// 2. функция добавления хайлайта:
//     - добавляет хайлайт к элементу
//     - отправляет ивент хайлайтед
function highlight(elem) {
    const bgColor = 'blue';
    elem.style.backgroundColor = bgColor;

    const highlighted = new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    });

    elem.dispatchEvent(highlighted);
}
// 3. функция адд бордер:
//     - принимает элемент к которому добавляется бордер

function addBorder(elem) {
    elem.style.border = '1px solid red';
}

function removeBorder(elem) {
    elem.style.border = '0px';
}
// 4. добавляем ивент листенер на элемент: 
// - слушает ивент хайлайтед
// - когда ивент получен, исполняет колбек функцию:
//         - добавляет бордер, вызывая функцию адд бордер

highlightedElem.addEventListener('highlight', (e) => {
    
    setTimeout(() => {
        addBorder(e.target);
        setTimeout(() => removeBorder(e.target), 1000);
    }, 1000);
    console.log(e.detail);
});

highlightBtn.addEventListener('click', () => highlight(highlightedElem));

function sum(obj) {
    let sum = 0;
    for (prop in obj) {
        sum += obj.prop;
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

console.log(sum(salaries));

function multiply(obj) {
    for (prop in obj) {
        console.log(typeof(obj[prop]));
        if (typeof obj[prop] === "number") {
            console.log(typeof(obj[prop]));
            obj[prop] = obj[prop] * 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiply(menu);


function Book(title, author, pages, read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')

console.log(theHobbit.info());


//Function factory

//Object creation and inheritance





//РАЗОБРАТЬСЯ С CREATEEFFECT, REDBORDEREFFECT итд

function createGame(game) {
    
    console.log(`Let the game of ${game} begin!`);
    let team1score = 0;
    let team2score = 0;

    function addPointToTeam1() {
        team1score++;
        console.log(`Team 1 gets a point! Team 1 score is ${team1score}, Team 2 score is ${team2score}`);
    }

    function addPointToTeam2() {
        team2score++;
        console.log(`Team 2 gets a point! Team 1 score is ${team1score}, Team 2 score is ${team2score}`);
    }

    return {addPointToTeam1, addPointToTeam2};
}

const football = createGame('Football');
football.addPointToTeam1();
football.addPointToTeam1();
football.addPointToTeam2();


// 1. Создать аккаунт (createAccount):

// Входные данные:
// - username
// - email

// Методы:

// - 1а) получить инфу об аккаунте (getAccountInfo)
// - 1b) создать героя - может быть несколько (createHero)
// - 1c) получить список героев (getHeroList)

//     1a) getAccountInfo:
//         - username
//         - email
//     1b) createHero:
//     Входные данные
//         - heroName
//         - heroClass
//         - hardcore?
//     Методы:
//         - 1bb) создать класс героя (createHeroClass)
//         Входные данные:
//         - className
//         Vars:
//         - lvl
//         - health
//         - attack
//         Методы:



const getInfo = document.querySelector('#getPlayerInfo');
const setRussia = document.querySelector('#setCountryRussia');
const setGermany = document.querySelector('#setCountryGermany');

getInfo.addEventListener('click', () => {
    console.log(mishgan.getPlayerInfo());    
});

setRussia.addEventListener('click', () => {
    console.log(mishgan.setCountry('Russia'));    
});

setGermany.addEventListener('click', () => {
    console.log(mishgan.setCountry('Germany'));    
});

const mishgan = createPlayer('Mishgan', 'orenkin@yandex.ru');
console.log(mishgan.getPlayerInfo());
// playerMishgan.changeUsername();
// playerMishgan.changeEmail();
// playerMishgan.setCountry();
// playerMishgan.setAvatar();

function createPlayer(username, email) {//обязательные параметры для аккаунта игрока. Должны быть заданы для создания аккаунта, но можно поменять потом
    
    //опциональные параметры, которые можно установить позже
    
    let country = 'not selected'; 
    let avatar = 'not uploaded';
    let heroes = ['not created'];

    return {
        getPlayerInfo : () => `Player ${username}'s Info: Email: ${email}, Country: ${country}, Avatar: ${avatar}, Heroes: ${heroes}`,
        setCountry : (countryName) => {
            country = countryName; 
            return `Country set to ${country}`
        },
        uploadAvatar : () => {},
        changeUsername : () => {},
        changeEmail : () => {},
        createHero : () => {},

        //DANGER ZONE
        resetAccount : () => {},
        deleteAccount : () => {}
        };
};
    



//Обязательные параметры для создания героя: имя героя, хардкор?,
//Необязательные параметры: класс, лига
//
//Обязательные параметры для создания класса: название класса
//
//
//