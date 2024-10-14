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


const blackBorderDiv = document.createElement('div');
blackBorderDiv.style.backgroundColor = 'pink';
blackBorderDiv.style.borderColor = 'black';
blackBorderDiv.innerHTML = '<h1>I\m in a div</h1><p>ME TOO</p>';
container.appendChild(blackBorderDiv);

const objectDiv = document.createElement('div');
objectDiv.textContent = 'Object assigned styles';
Object.assign(objectDiv.style, {
    borderColor: 'red',
    backgroundColor: 'blue'
});
container.appendChild(objectDiv);

const buttons = document.querySelectorAll('button');


const logTarget = (e) => {
    console.log(e.target);
    const x = 1 + 2;
    return x;
};

buttons.forEach(button => {
    button.addEventListener('click', logTarget);
});
