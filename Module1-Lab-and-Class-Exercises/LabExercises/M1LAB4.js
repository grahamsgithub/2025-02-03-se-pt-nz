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
This code: const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// is used to create a readline interface. The input is
// set to the standard input stream and the output is set
// to the standard output stream. Which is the terminal.
// We can use the readline interface to ask the user for input.

rl.question("What is your name? ", function(name) {
  greet(name);
  rl.close();
});

// This code: rl.question("What is your name? ", function(name) {
// is used to ask the user for their name. The question method
// is called on the readline interface. The first parameter is
// the question to ask the user. The second parameter is a
// callback function that is called when the user enters their
// name. The name is passed to the greet function and the readline
// interface is closed.