// Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a 
// and b. What does the ‘+=’ do? 
 
let a = 2, b = 3; 
let result = `${a} + ${b} is `; 
 
if (a + b < 10) { 
  result += 'less than 10'; 
} else { 
  result += 'greater than 10'; 
} 
console.log(result)

// output =
// 2 + 3 is less than 10

// in the below code we've changed a, b and result to c, d and result2
// because we can't have two variables with the same name in the same scope
// but it works the same way as the above code
// then we've used the ternary operator ? to replace the if else statement

// the ternary operator ? has this syntax:
// condition ? expression1 : expression2
// if the condition is true then expression1 is executed
// if the condition is false then expression2 is executed

// we also have += in the code which is an assignment operator
// x += y is the same as x = x + y
// so here: 

// result2 += (c + d < 10) ? 'less than 10' : 'greater than or equal to 10';

// we are saying result2 is going to be equal to result2 + the 
// end result of the ternery statement 
// before this line of code executes result2 is equal to `${c} + ${d} is `
// which is currently '2 + 3 is ' (from c = 2 and d = 3) 
// (note the backticks use which with the $ sign syntax allows us to
// add variables into the string)
// if the condition is true then 'less than 10' is added to result2
// if the condition is false then 'greater than or equal to 10' 
// is added to result2
// so because c + d = 2 + 3 = 5 which is less than 10
// the condition is true so 'less than 10' is added to result2

let c = 2, d = 3;
let result2 = `${c} + ${d} is `;

result2 += (c + d < 10) ? 'less than 10' : 'greater than or equal to 10';

console.log(result2);

// output =
// 2 + 3 is less than 10