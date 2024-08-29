//Exercise: Create a tagged template literal function called itemCount that takes a count of items and returns a message with proper pluralization. If the count is 1, the message should use "item"; otherwise, it should use "items". For example, "You have 3 items."

//use ternary operator

const numberOfItems = +prompt('How many items?');

function itemCount(strings, numberOfItemsExp) {
    return numberOfItemsExp <= 0
    ? `${strings[0]}no items`
    : numberOfItems === 1 
        ? `${strings[0]}${numberOfItemsExp} item`
        : `${strings[0]}${numberOfItemsExp} items`
}

const message = itemCount`You have ${numberOfItems}`;

alert(message);