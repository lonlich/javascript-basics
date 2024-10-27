const changeText = (e, text) => {e.target.textContent = text};
const addBorder = (e, color) => {e.target.style.borderColor = color};

const saveBtn = document.querySelector('#save');
const deleteBtn = document.querySelector('#delete');

saveBtn.addEventListener('click', handleClick([changeText('321'), addBorder('red')]));
deleteBtn.addEventListener('click', handleClick([changeText('123'), changeBg('yellow')]));

function handleClick(actions) {
    actions.forEach(action => {
        action();
    });
}