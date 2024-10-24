import * as Utils from '../utils.js';

const addBtn = document.querySelector('#add');
const list = document.querySelector('ul');
const item = document.querySelector('#item');

function addItem() {
    //create list item
    const listItem = document.createElement('li');
    

    if (!item.value.trim()) {
        item.focus();
        console.log(`Enter item`);
        return;
    }

    const itemName = item.value;
    listItem.textContent = itemName;

    //create delete button
    const deleteBtn = Utils.createDeleteButton('Delete');

    //add list item and delete button to the page
    list.appendChild(listItem);
    listItem.appendChild(deleteBtn);

    item.value = '';
    item.focus();

}

function deleteItem(e) {
    if (e.target.className === 'delete-btn') {
        const parentElement = e.target.parentElement; //li
        parentElement.remove();
    }
}

addBtn.addEventListener('click', addItem);
list.addEventListener('click', deleteItem);

