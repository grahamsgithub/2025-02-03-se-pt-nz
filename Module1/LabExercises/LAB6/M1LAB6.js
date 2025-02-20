// objects in javascript contain keys (or properties) with 
// corresponding values - key value pairs
// the syntax for JSON is: const variablename = {'key':'value'}

// create a book object with title, description, author, and pages
const book = {
    "title": "Famous Cheeses of the World",
    "description": "The book about famous cheeses.",
    "author": 'Bob Wilson',
    "pages": 2003
}
// we can access properties with dot notation
// and use console.log to print them individually
console.log('Use console.log to print the stored values in our object key value pairs individually');
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);
// or print the book object entire using the following
console.log('Use console.log to print the entire object');
console.log(book);
// we can assign new values to each key-value pair
console.log('Use console.log to show the updated description');
book.description = 'The 2nd Edition of Famous Cheeses.'
console.log(book.description);
// we can create an array of objects as well
// this is done by enclosing the objects in square brackets
// and separating them with commas so putting objects inside an array's syntax
// is like this: const arrayname = [{object1},{object2},{object3}]
// this is cool.
console.log('Use console.log to print an array of book objects');
const books = [
    {
        "title": "Famous Cheeses of the World",
        "description": "The book about famous cheeses.",
        "author": 'Bob Wilson',
        "pages": 2003
    },
    {
        "title": "Even More Famous Cheeses of the World",
        "description": "Another book about famous cheeses.",
        "author": 'Bob Wilson',
        "pages": 2004

    },
    {
        "title": "More Cheeses",
        "description": "And yet another cheese book.",
        "author": 'Bob Wilson',
        "pages": 2005
    },
    {
        "title": "Too much cheese",
        "description": "Cheeses.",
        "author": 'Bob Wilson',
        "pages": 2006

    },
    {
        "title": "Cheese overload",
        "description": "too much cheese.",
        "author": 'Bob Wilson',
        "pages": 2007

    }

];
console.log(books);
