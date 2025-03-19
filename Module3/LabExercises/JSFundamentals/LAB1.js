// What are the results of these expressions? 
// Answers before checking with console.log:

// "" + 1 + 0 
// "" = an empty string concatenated with 1 (a number)
// gives a string of 1 concatenated with 0 (a number)
// that then also is turned to a string value 
// so output is 10 (string value)

// "" - 1 + 0 
// same process as above but with subtraction changes now
// the "" empty string changes to a zero (number value) instead
// so you end with output -1 (number value)

// true + false
// when you try to concatenate boolean values, they are converted to numbers
// so while you think true + false should = false actually 
// now true = 1 and false = 0
// so output is 1 (number value)

// !true 
// ! is the logical NOT operator so will output false (boolean value)

// 6 / "3" 
// the division operator converts the 3 string value to number
// so output is 2 (number value)

// "2" * "3" 
// same as above process so output is 6 (number value)
// NB only + operator is different in that it concatenates strings
// other operators convert strings to numbers

// 4 + 5 + "px" 
// output would be 9px (string value) because the first two numbers 
// are added together (because bodmas left to right rule)
// so first: 4+5=9 then 9+px is concatenated with the string value
// of px so output is 9px (string value)

// "$" + 4 + 5 
// "$" is a string value so output is $45 (string value)
// same process as above the + operator concatenates strings with
// numbers converting the numbers to strings also

// "4" - 2 
// output would be 2 (number value) because the string value of 4 is converted 
// to a number by the subtraction operator

// "4px" - 2 
// output would be NaN (Not a Number) or undefined or Error
// because when the - operator is used with a string value
// it tries to convert the string to a number but here it can't
// because px can't be ignored, trimmed or converted to a number
// so some kind of error will be thrown

// "  -9  " + 5 
// output is "  -9 5" (string value) because the first string value
// is concatenated with the number value of 5 by the + operator
// which will turn the second number to a string value also
// note the spaces will be preserved also

// "  -9  " - 5
// output is -14 (number value) because the first string value
// is converted to a number by the - operator and then subtracted
// from the second number value
// this happens because the string value "  -9  " is converted to a number
// because the spaces are trimmed by the - operator
// unlike the px in the previous example because the spaces are ignored
// but letters cant be

// null + 1 
// output is 1 (number value) because null is converted to 0 by the + operator
// so 0 + 1 = 1
// NB null would be converted to 0 by only the mathematical operators + - * /
// but other operators like comparison operaters so 
// ==, === or > and < cause other results

// undefined + 1 
// output is NaN (Not a Number) because undefined 
// can't be converted to a number so we're trying to add a number to 
// undefined value to a number value so the same error as the "4px" - 2
// will be thrown

// undefined == null 
// output will be false (boolean value) because undefined and null are similar
// but not the same so they are not equal

// undefined === null 
// output will be false (boolean value) because undefined and null are 
// similar but the === comparison checks same value and type
// and undefined and null are not the same type 

// " \t \n" - 2
// output will be NaN (Not a Number) because the string value
// " \t \n" can't be converted to a number by the - operator 
// because it has letters in it, the spaces 
// if they are leading or trailing can be trimmed 
// but the letters can't
// so this will throw an error = NaN

console.log("" + 1 + 0);
// output is "10" (string value) Guessed correctly

console.log("" - 1 + 0);
// output is -1 (number value) Guessed correctly

console.log(true + false);
// output is 1 (number value) Guessed correctly
// true + false 

console.log(!true);
// output is false (boolean value) Guessed correctly

console.log(6 / "3");
// output is 2 (number value) Guessed correctly

console.log("2" * "3");
// output is 6 (number value) Guessed correctly

console.log(4 + 5 + "px");
// output is 9px (string value) Guessed correctly

console.log("$" + 4 + 5);
// output is $45 (string value) Guessed correctly
 
console.log("4" - 2);
// output is 2 (number value) Guessed correctly

console.log("4px" - 2);
// output is NaN (Not a Number) Guessed generally correct

console.log("  -9  " + 5);
// output is "  -9 5" (string value) Guessed correctly

console.log("  -9  " - 5);
// output is -14 (number value) Guessed correctly

console.log(null + 1);
// output is 1 (number value) Guessed correctly

console.log(undefined + 1);
// output is NaN (Not a Number) Guessed correctly

console.log(undefined == null);
// output is false (boolean value) Guessed wrong
// NB undefined == null is true because undefined and null are similar in value
// but they are not the same (null is a value that represents no value)
// (undefined is a type of value that represents absence of a value)

console.log(undefined === null);
// output is false (boolean value) Guessed correctly

console.log(" \t \n" - 2);
// output is NaN (Not a Number) Guessed wrong
// checked online for this answer and the output is -2 (number value)
// this is because the " \t \n" string value is converted to a number
// which is 0 this happens because even though the spaces
// are trimmed the symbols are too because the \t and \n 
// are actually reserved characters
// they stand for \t = tab and \n = newline so they can't be trimmed
// but they are understood to mean tab space and newline which are both 
// just still whitespace so they are also ignored
// and the whole string is then converted to 0 by the - operator
// so 0 - 2 = -2
 
// NB
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
