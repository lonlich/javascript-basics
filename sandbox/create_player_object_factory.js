import { log, capitalizeFirstChar, getButtonValue, random, checkArrEquality, createDeleteButton } from '../utils.js';


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
const changeUsername = document.querySelector('#changeUsername');
const reset = document.querySelector('#reset');


getInfo.addEventListener('click', () => {
    console.log(mishgan.getPlayerInfo());    
});

setRussia.addEventListener('click', () => {
    console.log(mishgan.setCountry('Russia'));    
});

setGermany.addEventListener('click', () => {
    console.log(mishgan.setCountry('Germany'));    
});

changeUsername.addEventListener('click', () => {
    console.log(mishgan.changeUsername('Aqua'));    
});

reset.addEventListener('click', () => {
    console.log(mishgan.resetAccount());    
});

const mishgan = createPlayer('Mishgan', 'orenkin@yandex.ru');
// console.log(mishgan.getPlayerInfo());
// console.log(mishgan.resetAccount());
// console.log(mishgan.getDefaultAccountInfo());
// playerMishgan.changeEmail();
// playerMishgan.setCountry();
// playerMishgan.setAvatar();

function createPlayer(username, email) {//обязательные параметры для аккаунта игрока. Должны быть заданы для создания аккаунта, но можно поменять потом
    
    //опциональные параметры, которые можно установить позже
    
    const defaultAccountInfo = {
        country : 'not selected', 
        avatar : 'not uploaded',
        heroes : 'not created'
    }
    
    // console.log('default account info');
    // console.table(defaultAccountInfo);
    let accountInfo = {...defaultAccountInfo};
    // console.log('account info and default');
    // console.table(accountInfo);
    // console.table(defaultAccountInfo);


    return {

        getDefaultAccountInfo : () => defaultAccountInfo,

        getPlayerInfo : () => `Player ${username}'s Info: Email: ${email}, Country: ${accountInfo.country}, Avatar: ${accountInfo.avatar}, Heroes: ${accountInfo.heroes}`,
        
        setCountry : (countryName) => {
            accountInfo.country = countryName; 
            console.table(defaultAccountInfo);
            console.table(accountInfo);
            return `Country set to ${accountInfo.country}`;
        },
        uploadAvatar : () => {
            
        },
        changeUsername : (newUsername) => {
            username = newUsername;
            return `Username changed to ${username}`;
        },
        changeEmail : () => {
        },
        createHero : () => {},

        //DANGER ZONE
        resetAccount : () => {
            accountInfo = {...defaultAccountInfo};
            return `Account has been reset`;
        },
        deleteAccount : () => {}
        };
};
    
log('hello');


//Обязательные параметры для создания героя: имя героя, хардкор?,
//Необязательные параметры: класс, лига
//
//Обязательные параметры для создания класса: название класса
//
//
//
let score = function(x){

    let points = 0;
    let y = x;
    console.log(x, y);
    return function(){

        points += 1;
        let z = points + y;
        console.log(x, y, z);
        return z, points;
    }();
}(100);

//points += 100; //ERROR
// console.log(score());
// console.log(score());
// console.log(score());

const calc = (function () {
  let timesRun = 0;
  const add = (a, b) => {
    timesRun++;
    return `Result: ${a + b}, Times run: ${timesRun}`;
  };
  const sub = (a, b) => a - b;
  return { add, sub };
})();

const {add, sub} = calc;
// console.log(calc.add(10, 5));
// console.log(calc.sub(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));

