// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can 
// be used to delay the call to that function by ms milliseconds. 

function multiply(a, b, c, d) { 
    console.log(a * b * c * d); 
} 

// added another function to test delay
function greet(name) {
    console.log(`Hello, ${name}!`);
    
}

// Using the Function prototype to add a new delay function
// to all functions, which can be used to delay the call to that function by ms milliseconds

// NB syntax access to prototype is Function.prototype
// this is a way to add a method to all functions in JavaScript
// then the .delay method is added to the Function prototype
// and this method takes a parameter ms which is the delay in milliseconds

// NB (...args) => lets us pass in any number of arguments
// and then the setTimeout function is called with the delay
// and the function is called with the arguments passed in
// this is a way to create a new function that will call the original function

// **Had to get help with the syntax for this one
// Still struggling with ...args and this uses 
// check with Mirza

Function.prototype.delay = function(ms) {
    return (...args) => {
        setTimeout(() => {
            this(...args);
        }, ms);
    }
}

multiply.delay(500)(5, 5, 5, 5); // prints 25 after .5s
greet.delay(2000)("Tom"); // prints "Hello, Alice!" after 2s

// Use apply to improve your solution so that delayed functions can take any number of 
// parameters

// NB apply is a way to call a function with a specific context and arguments
// so here we are calling the original function with the arguments that were passed to the function
// this is a way to call a function with a specific context and arguments

// null is used to set the context to null
// I got this from online documentation
// this means that the function will not have a specific context
// and will use the global context (which is window in a browser)
// which helps to avoid errors (?) Mirza

multiply.delay(3000).apply(null, [7, 7, 7, 7]); // prints 25 after 3s
greet.delay(4000).apply(null, ["Bella"]); // prints "Hello, Tom!" after 4s