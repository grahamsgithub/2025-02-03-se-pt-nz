// function expression vs declaration

// comment out the code below to test each function type

// function declaration

// function add(a, b) {
//   return a + b;
// }

// function expression

// const add = function(a, b) {
//   return a + b;
// }

// NB declaration can be hoisted, expression can't

// => arrow function

// shorter way of writing functions 

// below mean the same

// const add = function(a, b) {
//     return a + b;
//   }
  
// const add = (a, b) => {
//   return a + b;
// }

// arrow function with implicit return (if only one statement)

// const add = (a, b) => a + b;

// NB Function expressions and 
// declarations can access an 
// arguments variable within the body, 
// but arrow functions cannot

const sayHiExpression = function() {
    console.log('Hi');
    console.log(arguments);
 }
 function sayHiDeclaration() {
    console.log('Hi');
    console.log(arguments);
 }
 const sayHiArrow = () => { 
    console.log('Hi'); 
    console.log(arguments);
 }
 sayHiDeclaration() // [Arguments] {}
 sayHiExpression() // [Arguments] {}
 sayHiArrow() // ReferenceError: arguments is not defined
