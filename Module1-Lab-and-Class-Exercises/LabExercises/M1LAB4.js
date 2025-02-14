// in the below code we functions 
// to add, subtract, multiply and divide two numbers. 
// The functions are called with the numbers 5 and 10. 
// The results are printed to the console. a and b are 
// the parameters of the functions.
// because we are only passing 2 numbers to the functions,
// we can use a and b as the parameters.
// otherwise the parameters should be more descriptive. for example,
// function add(num1, num2) {
//   return num1 + num2
// }

// Below this we have a new function called greet.
// This function takes a name as a parameter and 
// logs a greeting to the console. It uses the readline
// module to get the name from the user.

// the below code (const readline = require('readline');) 
// is used to get user input. you have to install readline
// to use it in the terminal.
// the require function is used to import the readline 
// unit from the node.js standard library.

const readline = require('readline');

console.log('M1LAB4.js')
console.log('---------')
console.log('Things to do with the numbers 5 and 10:')
console.log('5 + 10 =', add(5, 10))
console.log('5 - 10 =', subtract(5, 10))
console.log('5 * 10 =', multiply(5, 10))
console.log('5 / 10 =', devide(5, 10))

function add(a, b) {
  return a + b
}   
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function devide(a, b) {
  return a / b
}

// New function to greet a person by name
function greet(name) {
  console.log(`Hello ${name}`)
}

// Ask the user for their name and greet them using readline
// the readline module is used to get user input
// I got the code example online and modified it
// to fit
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  greet(name);
  rl.close();
});