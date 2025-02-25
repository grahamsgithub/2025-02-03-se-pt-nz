const readline = require('readline');
let testpass = 0;
let nameentered = '';

// The add function takes two numbers as parameters and returns their sum.
// @param {number} a
// @param {number} b
// @returns {number} The sum of the two numbers.
// the method signature is: function add(a, b) { return a + b; }

// Test for the add function
// Checks if the sum of a and b is 15 using != 
// which is the not equal operator
if (add(5, 10) != 15) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the add function
// Checks if the sum of -5 and 10 is 5 using != 

if (add(-5, 10) != 5) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the add function
// Checks if the sum of 0 and 0 is 0 using != 

if (add(0, 0) != 0) { 
    throw new Error('Test failed');
 } else { testpass++; }

function add(a, b) {
  return a + b;
}

// The subtract function takes two numbers as parameters and returns their difference.
// @param {number} a
// @param {number} b
// @returns {number} The difference between the two numbers.
// the method signature is: function subtract(a, b) { return a - b; }

// Test for the subtract function
// Checks if a minus b is -5 using != 

if (subtract(5, 10) != -5) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the subtract function
// Checks if 10 minus 5 is 5 using != 

if (subtract(10, 5) != 5) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the subtract function
// Checks if -5 minus -10 is 5 using != 

if (subtract(-5, -10) != 5) { 
    throw new Error('Test failed');
 } else { testpass++; }

function subtract(a, b) {
  return a - b;
}

// The multiply function takes two numbers as parameters and returns their product.
// @param {number} a
// @param {number} b
// @returns {number} The product of the two numbers.
// the method signature is: function multiply(a, b) { return a * b; }

// Test for the multiply function
// Checks if a times b is 50 using != 

if (multiply(5, 10) != 50) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the multiply function
// Checks if 10 times 5 is 50 using != 

if (multiply(10, 5) != 50) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the multiply function
// Checks if -5 times -10 is 50 using != 

if (multiply(-5, -10) != 50) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the devide function
// Checks if 10 divided by 5 is 2 using != 

if (devide(10, 5) != 2) { 
    throw new Error('Test failed');
 } else { testpass++; }

// Additional test for the devide function
// Checks if -10 divided by -5 is 2 using != 

if (devide(-10, -5) != 2) { 
    throw new Error('Test failed');
 } else { testpass++; }

function multiply(a, b) {
  return a * b;
}

// The devide function takes two numbers as parameters and returns their quotient.
// @param {number} a
// @param {number} b
// @returns {number} The quotient of the two numbers.
// the method signature is: function devide(a, b) { return a / b; }

// Test for the devide function
// Checks if the a devided by b is 0.5 using != 
// which is the not equal operator
if (devide(5, 10) != 0.5) { 
    throw new Error('Test failed');
 } else { testpass++; }

function devide(a, b) {
  return a / b;
}

// The greet function takes a name as a parameter and logs a greeting to the console.
// @param {string} name - The name of the person to greet.
// the method signature is: function greet(name) { console.log(`Hello ${name}`); }

// Test for the greet function
// Checks if the user input only contains letters not numbers using != 
// which is the not equal operator

function greet(name) {
  console.log(`Hello ${name}`);
  return name;
}

console.log('M1LAB4.js');
console.log('---------');
console.log('Things to do with the numbers 5 and 10:');
console.log('5 + 10 =', add(5, 10));
console.log('5 - 10 =', subtract(5, 10));
console.log('5 * 10 =', multiply(5, 10));
console.log('5 / 10 =', devide(5, 10));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their name and greet them
rl.question("What is your name? ", function(name) {
    nameentered = name;
    greet(name);
    rl.close();
    
    // The below code sends 'All tests passed' to the console
    // if no errors are thrown by the if statements in the tests
    // The testpass variable is incremented by 1 for each test that passes
    // The final check below is placed here to ensure that the tests are run
    // and the greet function completes before the final check is made
    // and the 'All tests passed' message is sent to the console.
    
    // Test to check if the name entered consists of only letters
    // This uses a regular statement I got online and adapted to file.
    // The regular statement /^[a-zA-Z]+$/ checks if the name entered
    // consists of only letters and no numbers or special characters
    // If the name entered does not consist of only letters, an error is thrown

    if (/^[a-zA-Z]+$/.test(nameentered) != true) { 
        throw new Error('Test failed');
    } else { 
        testpass++; 
    }
    // The final check to see if all tests passed
    // testpass is incremented by 1 for each test that passes
    // if all tests pass meaning testpass is 13, the message 'All tests passed.' is sent to the console
    // NB the mathematical test check the validity of the functions add, subtract, multiply and devide
    // so whether the function correctly performs the mathematical operation
    // the final test checks if the name entered consists of only letters so is more of a validation test

    if (testpass == 13)  {
        console.log('All tests passed.');
    }
    
});