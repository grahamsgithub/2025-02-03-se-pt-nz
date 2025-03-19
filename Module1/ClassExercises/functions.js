// function expression vs declaration

// function declaration
function add(a, b) {
  return a + b;
}
// function expression
const add = function(a, b) {
  return a + b;
}

// NB declaration can be hoisted, expression can't

// => arrow function

// shorter way of writing functions 

// below mean the same

const add = function(a, b) {
    return a + b;
  }
  
const add = (a, b) => {
  return a + b;
}
// arrow function with implicit return (if only one statement)
const add = (a, b) => a + b;

