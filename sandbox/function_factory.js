const changeText = function(text) { 
    return function(e) {
        e.target.textContent = text;
    }
};

const addBorder = function(color) { 
    return function(e) {
        e.target.style.borderColor = color;
    }
};

const changeBg = function(bgColor) { 
    return function(e) {
        e.target.style.backgroundColor = bgColor;
    }
};

const saveBtn = document.querySelector('#save');
const deleteBtn = document.querySelector('#delete');

saveBtn.addEventListener('click', handleClick([changeText('Saved'), addBorder('red')]));
deleteBtn.addEventListener('click', handleClick([changeText('Deleted'), changeBg('yellow')]));

function handleClick(actions) {
    return function(e) {
    actions.forEach(action => {
        action(e);
    });
}};




