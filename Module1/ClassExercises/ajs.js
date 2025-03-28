// Task 1: Create 6 JS functions which print the pizza processing 
// statements and call those functions in sequence. Use a mix of 
// function declarations, expressions and arrow functions.

// Task 2: Make the functions asynchronous by using setTimeout with 
// different time durations, maintaining the right order

async function startedPrep() {
    console.log("Started preparing pizza ...");
}
// function declaration

madeBase = async function () {
    console.log("Made the base");
}
// function expression

addedSauce = async () =>{
    console.log("Added the sauce and cheese");
}
// arrow function

async function addedToppings() {
    console.log("Added the pizza toppings");
}
async function cookedPizza() {
    console.log("Cooked the pizza");
}
async function pizzaReady() {
    console.log("Pizza is ready");
}

setTimeout( startedPrep, 100);
setTimeout( madeBase, 200);     
setTimeout( addedSauce, 300);
setTimeout( addedToppings, 400);    
setTimeout( cookedPizza, 500);
setTimeout( pizzaReady, 600);

// Task 3: Modify the asynchronous functions to use Promises and 
// achieve the required result.

let start = 10;
new Promise((resolve, reject) => {
    resolve(start);  // resolve promise successfully with value of 10
}).then((startedPrep())
).then((madeBase())
).then((addedSauce())
).then((addedToppings())
).then((cookedPizza())
).then((pizzaReady())
);

// Task 4: Modify the functions to use async/await and achieve the 
// required result

async function waitingForAbove() {
await startedPrep()
await madeBase()
await addedSauce()
await addedToppings()
await cookedPizza()
await pizzaReady()
}

waitingForAbove();

