// Null vs Undefined

// In a variable:
// Both Null and Undefined are declared
// But Null is defined 
// while Undefined is not defined
// Null is defined as empty
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
// Null shows as an object type but this is a bug in JS, null is not a type