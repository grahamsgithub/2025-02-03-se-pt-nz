// Which of the below are not giving the right answer? Why are they not correct? How can we 
// fix them? 

// let three = "3" 
// let four = "4" 
// let thirty = "30" 
 
// If I understand the question correctly, the problem is 
// that the variables are strings and not numbers.
// but it looks like we are trying to perform arithmetic operations so 
// we should convert the strings to numbers so that the operations can be performed
// where needed
// so the first ouput of 34 (string value) should be 7 (number value)
// we can do this by using the parseInt() method to convert the strings to numbers
// eg. let three = parseInt("3") etc.
// or we could use the Number() method to convert the strings to numbers
// eg. let three = Number("3") etc.
// or we could re-write the variables as numbers
// as let three = 3 etc.

//what is the value of the following expressions?

// Ignoring my above answer, assuming we want to work with the inputs
// as originally written then:

// let addition = three + four 
// output is 34 
// (string value) because the + operator concatenates the strings

// let multiplication = three * four 
// output is 12 
// (number value) because the * operator converts the strings to numbers

// let division = three / four 
// output is 0.75
// (number value) because the / operator converts the strings to numbers

// let subtraction = three - four 
// output is -1
// (number value) because the - operator converts the strings to numbers

// let lessThan1 = three < four 
// output is true
// (boolean value) because the < operator converts the strings to numbers
// and then compares them and 3 is less than 4 so this it true

// let lessThan2 = thirty < four
// output is true
// (boolean value) because the < operator converts the strings to numbers

let three = "3" 
let four = "4" 
let thirty = "30" 
 
//what is the value of the following expressions? 
let addition = three + four 
// 34
// concatenation of string will here cause output of 34 string value  
let multiplication = three * four 
// 12
// multiplication will convert the strings to numbers and output 12
let division = three / four 
// 0.75
// division will convert the strings to numbers and output 0.75
let subtraction = three - four
// -1
// subtraction will convert the strings to numbers and output -1
let lessThan1 = three < four 
// true
// here the comparison operator < will compare the string value with the string
// value this is done character by character from left to right
// called lexicographical order
// so a is lower then be is lower than c etc.
// and 1 is lower than 2 is lower than 3 etc. 
let lessThan2 = thirty < four
// true 
// here the comparison operator < will compare the string value with the string
// value this is done character by character from left to right
// called lexicographical order
// so a is lower then be is lower than c etc.
// and 1 is lower than 2 is lower than 3 etc. 

console.log(addition, multiplication, division, subtraction, lessThan1, lessThan2)

// and so your output would be: 34 12 0.75 -1 true true

// if you changed the strings to numbers beforehand

// the output would be: 7 12 0.75 -1 true false instead