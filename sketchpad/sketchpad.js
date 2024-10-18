const container = document.querySelector("#container");
const containerWidth = 960;
containerHeight = 960;

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
    const div = document.createElement("div");
    div.style.width = divWidth + "px";
    //div.style.height = divWidth + 'px'; //making a square div
    container.appendChild(div);
  }
}

fillContainer(16);

let mousedown = false;

container.addEventListener('mousedown', (e) => {
    mousedown = true;
    e.target.style.backgroundColor = 'red'; // Change color of the initial div

    console.log(mousedown);
});

// Attach mousemove event listener outside of mousedown
container.addEventListener('mousemove', (e) => {
    if (mousedown) {
        if (e.target !== container) { // Ensure we're only changing color of child divs
            e.target.style.backgroundColor = 'red';
            console.log(mousedown);
        }
    }
});

// Attach mouseup event listener outside of mousedown
document.addEventListener('mouseup', (e) => {
    mousedown = false;
    console.log(mousedown);

    // Reset color of all child divs when mouse is released
    const childDivs = container.querySelectorAll('div'); // Adjust selector based on your child elements
    childDivs.forEach(div => {
        div.style.backgroundColor = ''; // Reset color
    });
});

