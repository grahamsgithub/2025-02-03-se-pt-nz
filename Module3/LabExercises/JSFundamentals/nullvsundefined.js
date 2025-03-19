// Null vs Undefined

// In a variable:
// Both Null and Undefined are declared
// But Null is defined 
// while Undefined is not defined
// Null is defined as as empty
// Undefined is not defined

// How to check Null:
// 1. Check if Null is undefined
let x = null;

if(x === undefined)
{
    console.log('x is undefined');
} else {
    console.log('x is defined');
}

// output is x is defined because null is defined;

if (typeof x === 'undefined') {
	console.log("x is undefined");
}
else {
	console.log("x is defined and"
		+ " value is " + x);
}

// output is x is defined and value is null because null is defined

// How to check Undefined:

let y;

if (typeof y === 'undefined') {
	console.log("y is undefined");
}
else {
	console.log("y is defined and"
		+ " value is " + y);
}

// Null converts to 0
// Null converts to false
// Undefined converts to NaN
// Undefined converts to false
// Null is a primitive value
// Undefined is a primitive value and a type
// *Null shows as an object type but this is a bug in JS, null is not a type
// You can empty a existing variable of any type 
// (array,object,string,boolean,number) by setting it to null 
// and it will change it's type to object (the JS bug).

let numbers = [1, 2, 3, 4, 5];

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(typeof numbers); // Output: object
// Empty the variable by setting it to null
numbers = null;

console.log(numbers); // Output: null

// The data type of the variable 'numbers' is still 'object' due to the historical bug in JavaScript
console.log(typeof numbers); // Output: object

// Example with a number
let num = 42
console.log(num); // Output: 42
console.log(typeof num); // Output: number

num = null;
console.log(num); // Output: null
console.log(typeof num); // Output: object

// Example with a string
let str = "Hello, world!";
console.log(str); // Output: Hello, world!
console.log(typeof str); // Output: string

str = null;
console.log(str); // Output: null
console.log(typeof str); // Output: object

// Example with a boolean
let bool = true;
console.log(bool); // Output: true
console.log(typeof bool); // Output: boolean

bool = null;
console.log(bool); // Output: null
console.log(typeof bool); // Output: object