let output;

const div = document.createElement('div');

div.className = "testElement";
div.id = "testId"

const text = document.createTextNode("Hi Hi");
div.appendChild(text);


// console.log(div);

document.querySelector('body').appendChild(div);

function createListItem(item) {
    const li = `<li>${item}</li>`
    document.querySelector('.items').appendChild();
}

createListItem('Eggs');