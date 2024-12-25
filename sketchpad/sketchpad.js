//utils

function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

//main code
const container = document.querySelector("#container");
const containerWidth = 960;
containerHeight = 960;
const containerBgColor = window.getComputedStyle(container).backgroundColor;
console.log(containerBgColor);

function setupContainer(containerWidth, containerHeight) {
  container.style.width = containerWidth + "px";
  container.style.height = containerHeight + "px";
}

//create divs

function fillContainer(divsPerRow) {
  setupContainer(960, 960);

  const totalDivs = divsPerRow * divsPerRow;
  const divWidth = containerWidth / divsPerRow;

  for (let i = 0; i < totalDivs; i++) {
    setTimeout(() => {
      const div = document.createElement("div");
      div.style.width = divWidth + "px";
      div.className = 'pixel';
      //div.style.height = divWidth + 'px'; //making a square div
      
      //vizualize filling of the container
      container.appendChild(div);
    }, i * 0.1);
  }
}

function resetContainer() {
  container.innerHTML = '';
}

function clearDivs() {
  const divs = document.querySelectorAll('.pixel');
  console.log(divs);
  divs.forEach(div => {
    div.style.backgroundColor = containerBgColor;
  }); 
}

function getRandomBgColor() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  return `rgb(${r},${g},${b})`;
}

let mousedown = false;

container.addEventListener('mousedown', (e) => {
    mousedown = true;
    e.target.style.backgroundColor = getRandomBgColor();
    //e.target.style.backgroundColor = 'red'; //change color of the 1st div
    //console.log(mousedown);
});

container.addEventListener('mouseover', (e) => {
    if (mousedown) {
      e.target.style.backgroundColor = getRandomBgColor();
      //e.target.style.backgroundColor = 'red';
      //console.log(mousedown);  
    }
});

// Attach mouseup event listener outside of mousedown
document.addEventListener('mouseup', (e) => {
    mousedown = false;
    console.log(mousedown);
});

const start = document.querySelector('#start');
let divsPerRow = null;

start.addEventListener('click', () => {
  divsPerRow = document.querySelector('#divs-per-row').value;
  console.log(divsPerRow);  
  if (!divsPerRow) {
    alert('Enter number of "pixels');
    return;
  }

  fillContainer(divsPerRow);
});

reset.addEventListener('click', () => {
  resetContainer();
});

clear.addEventListener('click', () => {
  clearDivs();
});