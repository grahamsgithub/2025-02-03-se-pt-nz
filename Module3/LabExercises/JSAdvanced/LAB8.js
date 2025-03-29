// Using the following starter code, create a decorator function to validate function arguments 
// as strings. Test it by decorating the given orderItems function below. 

// Extend orderItems to use the ...rest operator
function orderItems(...itemNames) { 
    return `Order placed for: ${itemNames.join(', ')}`; 
} 
 
// Create a decorator function validateStringArg(fn) which will validate all arguments passed 
// to fn to ensure that they are strings, throwing an error if not
function validateStringArg(fn) {
    return function(...args) {
        // Validate all arguments to ensure they are strings
        if (args.some(arg => typeof arg !== 'string')) {
            throw new Error('Only strings are allowed.');
        }
        return fn(...args);
    }
}

// Create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

// Test the updated function using try-catch blocks
try {
    console.log(validatedOrderItem("Apple Watch", "Stop Watch", "Garmin Watch")); // should run the function
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItem(123, "iPhone")); // should throw an error
} catch (error) {
    console.error(error.message);
}

try {
    console.log(validatedOrderItem("iPad", "Samsung Tablet")); // should run the function
} catch (error) {
    console.error(error.message);
}