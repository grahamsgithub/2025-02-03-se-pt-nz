// Use the following variables to understand how JavaScript stores objects by reference. 
// a) Create a new moreSports variable equal to teamSports and add some new sport 
// values to it (using push and unshift) 
// b) Create a new dog2 variable equal to dog1 and give it a new value 
// c) Create a new cat2 variable equal to cat1 and change its name property 
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they 
// changed? Why? 
// e) Change the way the moreSports and cat2 variables are created to ensure the 
// originals remain independent 

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
// let moreSports = teamSports;

// NB the above line of code tells moreSports to reference 
// the same array as teamSports meaning they refer to the same array
// so if you change one you change the other
// alternatively if you don't want that you would do this:
// let moreSports = [...teamSports];
// so if you change one array the other remains the same
// the ... above is called the spread operator
// it is used to copy an array or object to a new array or object

let moreSports = [...teamSports];

moreSports.push('Golf');
moreSports.unshift('Tennis');
moreSports.splice(1, 0, 'Gymnastics');

// so this array is now:
// 'Tennis', 'Gymnastics', 'Hockey', 'Cricket', 'Volleyball', 'Golf' 

// because we started with the copied values:
// 'Hockey', 'Cricket', 'Volleyball'
// and then we added 'Golf' to the end of the array
// and 'Tennis' to the beginning of the array
// and 'Gymnastics' to the index position 1
// which moved the other elements down


// push is used to add an element to the end of an array
// unshift is used to add an element to the beginning of an array
// splice is used to add or remove elements from an array
// the first argument is the index position
// the second argument is the number of elements to remove
// the third argument is the element to add
// so here we are adding 'Gymnastics' to the index position 1
// and we are not removing any elements which moves the other elements down

let dog1 = 'Bingo'; 
let dog2 = 'Spot';

// above we have a string called dog1 with the value 'Bingo'
// and we then created a new string called dog2 with the value 'Spot'
// both are equal in that they are strings
// but they are different in that they are different strings


let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = { ...cat1 };
cat2.name = 'Speedy';

// above we have an object called cat1 with two properties
// name and breed in key value pairs
// name has the value 'Fluffy'
// breed has the value 'Siberian'
// and then we created a new object called cat2
// and we used the spread operator to copy the cat1 object
// with this line:
// let cat2 = { ...cat1 };
// and then we changed the name property of the cat2 object
// to 'Speedy'
// with this line:
// cat2.name = 'Speedy';
// so now the cat2 object has the properties
// name with the value 'Speedy'
// and breed with the value 'Siberian'

console.log(teamSports,moreSports,dog1,cat1,dog2,cat2);
// so the output will be:

// [ 'Hockey', 'Cricket', 'Volleyball' ] 
// [ 'Tennis', 'Gymnastics', 'Hockey', 'Cricket', 'Volleyball', 'Golf' ] 
// Bingo { name: 'Fluffy', breed: 'Siberian' } 
// Spot { name: 'Speedy', breed: 'Siberian' }

// so the teamSports array has not changed
// because we copied the values to the moreSports array
// the dog1 string has not changed
// because we created a new string called dog2
// the cat1 object has not changed
// because we copied the values to the cat2 object
// the dog2 string has changed
// because we created a new string called dog2
// the cat2 object has changed
// because we copied the values to the cat2 object
// and then we changed the name property of the cat2 object