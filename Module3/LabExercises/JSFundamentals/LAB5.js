// Rewrite the following function using: a) function expression syntax, and b) arrow function 
// syntax. Test each version to make sure they work the same. 

let name = 'John';

function getGreeting(name) { 
    return 'Hello ' + name + '!';}

console.log(getGreeting(name));

// above output is: Hello John!

// function expression syntax see below

// is when a function is assigned to a variable.
// so going from let x = 1 to let x = function() { return 1; }

// in the below code we changed name to name2 to avoid conflict with 
// the global variable name and getGreeting to getGreeting2
// to avoid conflict with the global function getGreeting
// note using function below is a function expression


let name2 = 'Alice';
const getGreeting2 = function(name2) {
    return 'Hello ' + name2 + '!';
};

console.log(getGreeting2(name2));

// above output is: Hello John!

// arrow function syntax see below

// changed name to name3 to avoid conflict with the global variable name
// and getGreeting to getGreeting3 to avoid conflict with the global 
// function getGreeting

// note using function below is an arrow function this means
// we are using the => syntax it is a shorter way to write a function
// => is called the fat arrow
// it takes the place of the function keyword
// so these are all the same: 

// function getGreeting(name) 
// const getGreeting2 = function(name2) 
// const getGreeting3 = (name3) =>


let name3 = 'Ben';

const getGreeting3 = (name3) => {
    return 'Hello ' + name3 + '!';
};

console.log(getGreeting3(name3));


