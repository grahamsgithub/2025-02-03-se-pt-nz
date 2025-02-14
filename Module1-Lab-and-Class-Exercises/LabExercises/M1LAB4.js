// in the below code we functions 
// to add, subtract, multiply and divide two numbers. 
// The functions are called with the numbers 5 and 10. 
// The results are printed to the console. a and b are 
// the parameters of the functions.
// because we are only passing 2 numbers to the functions,
// we can use a and b as the parameters.
// otherwise the parameters should be more descriptive. for example,
// function add(num1, num2) {
//   return num1 + num2
// }

console.log('M1LAB4.js')
console.log('---------')
console.log('Things to do with the numbers 5 and 10:')
console.log('5 + 10 =', add(5, 10))
console.log('5 - 10 =', subtract(5, 10))
console.log('5 * 10 =', multiply(5, 10))
console.log('5 / 10 =', devide(5, 10))

function add(a, b) {
  return a + b
}   
function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function devide(a, b) {
  return a / b
}

