// 1. Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.

// in the below code block we:
// 1. create a function called ucFirstLetters that takes a string as a parameter
// using function ucFirstLetters(str) {} the 'str' is the parameter name (can be anything) but str is short for string to understand 
// so ucFirstLetters will take a string as a parameter
// 2. then we split the string into an array of words using str.split(" ") which splits the string at each space
// this .split will automatically save into an array if used on a string
// this will only work if the string is separated by spaces if it is seperated by other characters we would need to use a different method
// or update this method 
// 3. then we create an empty string called result using let result = "";
// 4. then we use a for loop to iterate over the array of words
// in the for loop we: 1. say let i = 0; this is setting the starting point of the loop
// 2. then we say i < words.length; this sets the condition and end point of the loop
// so as long as i is less than the length of the words array the loop will continue
// 3. then we say i++ which increments the value of i by 1 each time the loop runs but only after it runs the code block
// 4. then we say result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
// this line of code is saying that for each word in the array of words we want to take the first character of the word and change it to uppercase
// then we want to add the rest of the word to the first character and add a space at the end
// we use the += operator to add the result of the operation to the result string
// so the first time the loop runs it will take 'los angeles' or whatever the input string is
// and save it as an array of words so ['los', 'angeles']
// then it will take the first word 'los' and change the first character to uppercase 'L' because words[i] = 'los'
// with words[i].charAt(0).toUpperCase() then add the rest of the word 'os' 
// by using words[i].slice(1) then add a space at the end
// word.[i] is the current word in the array of words (so first time is 'los' second time is 'angeles')
// and .slice(1) is taking the word (los) from the second character to the end and then adding a space at the end
// so it prints out easy to read with a space between the words
// then we use return result; to return the result of the function
// this function will then run as many times as there are words in the input string and then stop
// assuming all words are seperated by spaces only 

function ucFirstLetters(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    return result;
}
console.log("1. :")
console.log(ucFirstLetters("los angeles city tour") ) //Los Angeles

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
// length is greater than the max length. It should return either the truncated text, with an
// ellipsis (…) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

// in the below code block we:
// 1. create a function called truncate that takes a string and a max length as parameters
// 2. then we use an if statement (conditional operator) to check if the length of the string 
// is greater than the max length like this:

// function truncate(str, max) {
//     if (str.length > max) {
//         return str.slice(0, max) + '...';
//     } else {
//         return str;
//     }
// }

// but this can also be written with a ternary operator like this:
// return (str.length > max) ? str.slice(0, max) + '...' : str;

// this is a shorter way of writing the same code as above
// the ternary operator is like a shorthand if statement
// it is written like this:

// (condition) ? value if true : value if false

// so in this case the condition is (str.length > max)
// which means if the length of the string is greater than the max length
// then it is true and runs the true condition so str.slice(0, max) + '...' 
// but if the condition test comes back as false it just 
// runs return str (so prints the whole original string)

function truncate(str, max) {
    return (str.length > max) ? str.slice(0, max) + '...' : str;
}

console.log("2. :")
console.log(truncate('This text will be truncated if it is too long', 25)) // This text will be truncat...

// 3. Use the following animals array for the below tasks. 
// Test each one by printing the result to
// the console. Review the following link for tips:
// https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array
// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.

// in the below code block we:
// 1. create an array called animals with two values 'Tiger' and 'Giraffe'
// 2. then we use the .push method to add two new values to the end of the array
// 3. then we use the .unshift method to add two new values to the beginning of the array
// NB push adds pop removes from the end of the array
// NB unshift adds shift removes from the beginning of the array
// 4. then we use the .sort method to sort the values alphabetically
// .sort() will sort the values in the array alphabetically
// it does this automatically because it will by default
// sort array elements as strings but if you mix numbers and strings
// it will sort and show first the numbers and then the strings

// so if we did this:
// animals.unshift('Armadillo','Duck',3,6,1)
// // it would sort like this:
// // [1, 3, 6, 'Armadillo', 'Duck', 'Giraffe', 'Tiger']
// // because it will sort the numbers first and then the strings

// next we use .splice to replace the middle animal with a new value
// .splice() is used to add or remove elements from an array
// it can take three parameters
// the first is the index at which to start changing the array
// the second is how many elements to remove
// the third is the new elements to add
// so in this case we want to add a new value in the middle of the array
// so we use Math.floor(animals.length/2) to get the middle index 
// then we use 0 to say we don't want to remove any elements
// then we use newValue to add the new value
// this will add the newValue in the middle of the array

// next we use .filter to find all the animals that begin with a certain letter
// .filter() is used to create a new array with all elements that pass the test 
// .filter will automatically iterate over the array and test each element
// with a true or false test that decides if the element should be added to the new array
// implemented by the function findMatchingAnimals() inside the .filter brackets
// so in this case we want to find all the animals that begin with a certain letter beginsWith = 't'
// so we use animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
// the .filter() method will create a new array with all the animals that pass the test
// inside the .filter() brackets we use a function that takes a parameter called animal
// this function will then test each animal in the array
// by using the .toLowerCase() method to make sure the letter is lowercase
// and then the .startsWith() method to check if the animal begins with the letter
// if it does it will add it to the new array named foundAnimals
// and then return the new array foundAnimals
// it uses the fat arrow syntax and function => to create the function inside the .filter() method
// this is a shorthand way of writing a function
// it is like writing function(animal) {} but shorter
// it is used to make the code easier to read and write
// this could also be written like this:
// 
// function findMatchingAnimals(animal) {
//     return animal.toLowerCase().startsWith(beginsWith.toLowerCase())
// }

// so now to search for animals that begin with a certain letter we can use this function
// and just change the letter we are looking for in beginsWith = 

const animals = ['Tiger', 'Giraffe']

animals.push('Monkey', 'Zebra')
animals.unshift('Armadillo','Duck','Teddy Bear')
animals.sort()

newValue = 'Elephant'
function replaceMiddleAnimal(newValue) {
    animals.splice(Math.floor(animals.length/2), 0, newValue);
    return
}
replaceMiddleAnimal(newValue)

console.log("3. :")
console.log(animals)

beginsWith = 't';

function findMatchingAnimals(beginsWith)
{
    let foundAnimals = animals.filter(animal => animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
    return foundAnimals
}

console.log(findMatchingAnimals(beginsWith))

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

// in the below code block we:
// 1. create a function called camelCase that takes a css property as a parameter
// which we expect to be a string
// 2. then we use the .split() method to split the css property at each dash
// this will create an array of words from the css property
// so 'margin-left' will become ['margin', 'left']
// 3. then we use the .map() method to iterate over the array of words
// that we just created with .split() so first 'margin' then 'left' will be the current word
// that the .map() method is working on
// 4. inside the .map() method we use a function that takes two parameters
// the current word and the index of the current word
// so first 'margin' and 0 then 'left' and 1
// then we use a ternary operator to check if the index is 0
// using the conditional operator (condition) ? value if true : value if false

// NB => syntax = condition ? valueIfTrue : valueIfFalse
// NB JS ruler = the number 0 is considered falsy, 
// while any other number is considered truthy.

// so when the index is 0 the test result is false 
// which means we run the code after the ':' which
// in this case is just the word as is
// this is done here in the code block:
// word.charAt(0).toUpperCase() + word.slice(1) : word
// being : word

// we just return the word as is
// so when the index is 0 we just return the word as is
// and it is then added to the new array of words using .join('') in it's current position
// so the first word 'margin' will be added to the new array as 'margin' in it's current position
// then next when the index is 1 the test result is true
// so the first code is run meaning before the :
// word.charAt(0).toUpperCase() + word.slice(1)
// this will take the first character of the word and change it to uppercase
// then add the rest of the word to the first character using
// word.slice(1) which takes the word from the second character to the end
// // then adds it to the first character
// then the ternery block is run which is again .join('')
// which then adds the word to the new array of words still in 
// it's current position
// // the '' in .join('') is just to make sure the words are joined together with no spaces
// so we go from ['margin', 'left'] to ['marginLeft'] 


function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => index ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');
}
console.log("4. :")
console.log(camelCase('margin-left-and-right')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// in the below code block we:
// 1. create a function called camelCase that takes a css property as a parameter
// which we expect to be a string
// then we use the .split() method to split the css property at each dash
// saving the result into an array called words
// then we create result and set it to words[0]
// so it will be the first word in the array of words
// then we use a for loop to iterate over the words array
// we set i = 1 to start the loop at the second word
// because we already set the first word to result
// then we set the test condition to i < words.length
// so it will run as long as i is less than the length of the words array
// then we use i++ to increment the value of i by 1 each time the loop runs
// then we set result to += words[i].charAt(0).toUpperCase() + words[i].slice(1)
// so for each word in the array of words (starting at position 2) 
// we take the first character of the word and change it to uppercase
// then add the rest of the word to the first character using 
// .slice(1) which takes the word from the second character to the end
// then we return the result of the function as result
// this for loop will run for each word in the array of word from the 2nd
// word to the last word and then stop
// it does the same as the above ternery statement ? : but with a for loop instead
// this is the one i would use because it is easier to read and understand for me
// and it is easier to debug if there are any issues

function camelCase(cssProp) {
    let words = cssProp.split('-');
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return result;
}
console.log(camelCase('margin-left-and-right')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// in the below code block we:
// 1. create a function called camelCase that takes a css property as a parameter
// here we let words = cssProp.split('-');
// this will split the css property at each dash and save the result into an array called words
// then we create a variable called result and set it to words[0]
// so in our example that would be 'margin'
// then we use a for loop to iterate over the array of words
// again starting at position 2 same as above again but now we use 
// an if statement
// 'if (i)' checks if i is not 0 meaning here again that 
// i = 0 means false and i > 0 means true
// so if i is not 0 we run the code block for as 
// long as i is less than the length of the words array
// the rest works the same as before

function camelCase(cssProp) {
    let words = cssProp.split('-');
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
        if (i) {
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
        } else {
            result += words[i];
        }
    }
    return result;
}
console.log(camelCase('margin-left-and-right')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
// following:
let twentyCents = 0.20
let tenCents = 0.10
console.log("5. :")
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

// // 0.2 + 0.1 = 0.30000000000000004
// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen)  //why is this not working?

// a) Explain why the above code returns the wrong answer

// because the toFixed() method returns a string not a number
// so when we use the + operator it is concatenating the two strings together
// not adding them as numbers
// to fix this we can use parseFloat() to convert the strings back to numbers
// and then add them together
// using parseFloat(fixedTwenty) + parseFloat(fixedTen) which we can put inside
// the console.log() to print the result like so:

console.log(parseFloat(fixedTwenty) + parseFloat(fixedTen))

// which we can then round to 2 decimal places using toFixed() like so:

console.log((parseFloat(fixedTwenty) + parseFloat(fixedTen)).toFixed(2))

// NB this again made still a string though so if we want to use the result as a number
// we need to use parseFloat() again


// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.

float1 = 0.20;
float2 = 0.40;

function currencyAddition(float1, float2) {
    return parseFloat(float1) + parseFloat(float2);
}

console.log(currencyAddition(float1, float2))

// the above will return 0.6000000000000001

// to return the correct result of 0.6 we
// can use .toFixed(2) like so:

console.log((currencyAddition(float1, float2)).toFixed(2))

// the above will return 0.60

// but if you wanted to display 0.60 as a number not a String
// you would need to use parseFloat() again like so:

console.log(parseFloat((currencyAddition(float1, float2)).toFixed(2)))
// the above will return 0.6 but as a number

//boolean test
console.log(0.6 == parseFloat((currencyAddition(float1, float2)).toFixed(2))) // true

// if you wanted the below test to work:

// console.log(0.3 == currencyAddition(0.1, 0.2)) // true

// you would need to change the function like so:

floatA = 0.10;
floatB = 0.20;
function currencyAdditionTwo(floatA, floatB) {
    let result = parseFloat(floatA) + parseFloat(floatB);
    return parseFloat(result.toFixed(2));
    }
console.log(currencyAdditionTwo(0.1, 0.2)) // 0.3
//boolean test with function naming adapted as required
console.log(0.3 == currencyAdditionTwo(0.1, 0.2)) // true

// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns
// the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// in the code below we assume we want the output to be as a number not a string
// so output to terminal in yellow not white
// so we can use a switch statement 
// this is a way to run different code blocks depending on the value of a variable
// so in this case we want to run different code blocks depending on the 
// value of the operation input (either +, -, / or *)
// then we use the case for each operation we want to run

// so let us state float values as:
// NB i also updated the boolean test values accordingly

float3 = 0.30;
float4 = 0.50; 

function currencyOperation(float3, float4, operation,) {
    switch (operation) {
        case '+':
            return float3 + float4;
        case '-':
            return float3 - float4;
        case '/':
            return float3 / float4;
        case '*':
            return float3 * float4;
    }
}

console.log(currencyOperation(0.30, 0.50, '+')) // 0.8
console.log(currencyOperation(0.30, 0.50, '-')) // -0.2
console.log(currencyOperation(0.30, 0.50, '/')) // 0.6
console.log(currencyOperation(0.30, 0.50, '*')) // 0.15 
//boolean test
console.log(0.8 == currencyOperation(0.3, 0.5, '+')) // true

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
float5 = 0.31111111;
float6 = 0.52222222;

function currencyOperationExtended(float5, float6, operation, numDecimals) {
    let result;
    switch (operation) {
        case '+':
            result = float5 + float6;
            break;
        case '-':
            result = float5 - float6;
            break;
        case '/':
            result = float5 / float6;
            break;
        case '*':
            result = float5 * float6;
            break;
        default:
            throw new Error('Invalid operation');
    }
    // Round the result to the specified number of decimal places
    return parseFloat(result.toFixed(numDecimals));
}

console.log("extension for 5. d.:")
console.log(currencyOperationExtended(float5, float6, '+', 2)); // 0.xx
console.log(currencyOperationExtended(float5, float6, '-', 6)); // -0.xxxxxx
console.log(currencyOperationExtended(float5, float6, '/', 8)); // 0.xxxxxxxx
console.log(currencyOperationExtended(float5, float6, '*', 10)); // 0.xxxxxxxxxx

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
// include duplicates. Your function should return an array containing only the unique values
// from duplicatesArray.
// Test with the following arrays and create another one of your own.

// in the below code:
// there are a few possible ways to remove duplicates from an array
// one way is to use the Set object
// a Set object is a collection of unique values
// so if you pass an array with duplicates to a Set object
// it will automatically remove the duplicates
// and return an array with only the unique values
// set object also has a method called .has() which returns a boolean
// so you can use this to check if a value is already in the Set
// but you could also use filter or a compare if statement that
// iterates over the array


const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

// the unique function below:
// 1. takes an array called duplicatesArray as a parameter
// 2. creates a copy of the array called arrayCopy using the spread operator
// 3. creates a new Set object called seen
// 4. creates an empty array called uniqueArray
// we need these to store the unique values
// 5. then we use a forEach loop to iterate over the arrayCopy

function unique(duplicatesArray) {
    const arrayCopy = [...duplicatesArray];
    const seen = new Set();
    const uniqueArray = [];

// 5. then we use a forEach loop to iterate over the arrayCopy

// NB forEach is a method that calls a function once for each element in an array
// note the syntax is: arrayname.forEach()

// so in this case we use arrayCopy.forEach((element) => {})
// this is a shorthand way of writing a function
// the => here means function
// so we are creating a function that takes an element as a parameter
// and then runs the code block for each element in the array

// the if statement inside the forEach loop checks if the element 
// is already in the seen set
// using !seen (not seen) and .has() which returns a boolean
// so the first time the loop runs it will check if the element is in the Set
// but because it is the first time the set is empty 
// so the test result is true (i.e. element not seen yet) 
// so the code block runs and adds the element to the Set and the uniqueArray
// then the loop runs again for the next element
// and checks if this element is in the Set
// if it is !seen it again adds it to seen set and uniqueArray
// if it is not it just moves on to the next element
// then when it is done iterating through all the elements in the array
// it returns the uniqueArray

    arrayCopy.forEach((element) => {
        if (!seen.has(element)) {
            seen.add(element);
            uniqueArray.push(element);
        }
    });

    return uniqueArray;
}

// I did the above to help me learn.
// the shorter way would be to just do the below
// which applies the set object to the array directly
// but still spread copies to not change the original array 

// function unique(duplicatesArray) {
//     return [...new Set(duplicatesArray)];
// }


console.log("6. :")
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

// 7. Use the following array of book objects to practice the array functions for map, find and
// filter. Test each of your answers to the below tasks.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

// a) Write a function getBookTitle(bookId) that uses the find function to return the
// title of the book object with the matching id.

// this first code below is what I wrote initially and understand easily

// function getBookTitle(bookId) {
//     // Step 1: Initialize a variable to store the found book
//     let foundBook = null;

//     // Step 2: Iterate over the books array
//     for (let i = 0; i < books.length; i++) {
//         // Step 3: Check if the current book's id matches the bookId
//         if (books[i].id === bookId) {
//             foundBook = books[i];
//             break; // Exit the loop once the book is found
//         }
//     }

//     // Step 4: Return the title if the book is found, otherwise return 'Book not found'
//     if (foundBook) {
//         return foundBook.title;
//     } else {
//         return 'Book not found';
//     }
// }

// the below code was AI suggested but does the same thing as mine
// but with chaining and fat arrow uses not if statements it uses
// books.find() to find the book with the matching id in the array
// .find will iterate over the array 
// and return the first element that matches the condition
// so this line below is our test condition
// (books.find(book => book.id === bookId).title;)
// it uses the fat arrow syntax to create a function inside the find method
// it takes a parameter called book which is the current book object in the array
// being tested by the find method and checks if 
// the book.id (which is the same as the books.id)
// and then checks if the book.id of the array is equal to the bookId passed in


// function getBookTitle(bookId) {
//     return books.find(book => book.id === bookId).title;
// }   

// the above was still hard for me to understand but I 
// wrote the below which I understand better

// NB in the below code
// .find iterates over each element in the array books
// book = current element in the array being iterated
// so for us this is the current book object in the books array being
// iterated over by .find
// and then the return line has an ternery statement ?
// so if foundBook is true (meaning foundBook has a value and is not empty
// then it will return foundBook.title (the true condition after the ?)
// but if foundBook is false (meaning foundBook is empty)
// then it will return 'Book not found' (the false condition after the :)


function getBookTitle(bookId) {
    // Use the .find method to locate the book with the matching id
    const foundBook = books.find(book => book.id === bookId);

    // Return the title if the book is found, otherwise return 'Book not found'
    return foundBook ? foundBook.title : 'Book not found';
}

console.log("7. a:")
console.log(getBookTitle(6)) // To Kill a Mockingbird

// b) Write a function getOldBooks() that uses the filter function to return all book
// objects written before 1950. 

// the below is just an adaptation of 7.a but now with filter used
// it takes year (as parameter) in the function and then uses the .filter method
// to iterate over the array of books and return the books written before the year
// if it finds a book where the book.year is less than the year passed in
// it will add it to the array foundOldEnough
// when it has iterated over the whole books array it will return 
// the array foundOldEnough which will now contain all the books 
// written before the year passed in
// but if it does not find any books written before the year passed in
// it will return 'Book not found' (using the true/false test ? :) Syntax
// after the return statement

function getOldBooks(year) {
    // Use the .filter method to locate the books written before the specified year
    const foundOldEnough = books.filter(book => book.year < year);

    // Return the title if the book is found, otherwise return 'Book not found'
    return foundOldEnough.length ? foundOldEnough : 'None found'; //ERROR ask Mirza
}

console.log("7. b:")
console.log(getOldBooks(1800)) // 

// c) Write a function addGenre() that uses the map function to add a new genre property
// to all of the above books, with the value ‘classic’.

// NB  .map changes the original array
// map is used to iterate over the array and change the values
// it will return a new array with the changed values
// the below code block is just an adaptation of 7.a again
// the important part is: 
// (book => {book.genre = genre; return book;})
// this is the function inside the .map method
// it takes a parameter called book which is the current book object in the array
// being iterated over by .map
// then it sets the book.genre to the genre passed in
// then returns the updated book element
// so it will iterate over each book in the array and add a genre property
// to each book with the value 'classic' and then return the updated book
// this will change the original array of books

function addGenre(genre) {
    // Use the .map method to add a new genre property to each book
    return books.map(book => book.genre = genre);
}

// call the function with the parameter 'classic'
addGenre('classic');

// print updated array to console
console.log("7. c:")
console.log(books) // 

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
// filter together to return an array of book titles for books written by authors whose
// names start with authorInitial.

// the below code block is an extension of 7.a
// but now it uses .filter and .map together
// it takes authorInitial as a parameter
// then uses .filter to iterate over the array of books
// .filter will create a new array with all elements that pass the test
// inside the .filter method we use a function using the fat arrow syntax
// so here book = current book object in the array being iterated
// we use book.author.charAt(0).toUpperCase() === authorInitial.toUpperCase()
// to check if the first character of the author's name is the same as the authorInitial
// then if it is then the .map will take the title of the book and add it to the new array

// NB this array is unnamed it is just returned as the result of the function
// it is being created by the .map method and then returned by the function to the .filter method
// so the function will return the array of titles of books written by authors

//CHECK above with Mirza


function getTitles(authorInitial) {
    return books.filter(book => 
        book.author.charAt(0).toUpperCase() === authorInitial.toUpperCase()).map(book => book.title);
} 

console.log("7. d:")
console.log(getTitles('H')) // [ 'To Kill a Mockingbird' ]
