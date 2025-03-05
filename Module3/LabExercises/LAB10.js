// The following constructor function creates a new Person object with the given name and 
// age values. 
// a) Create a new person using the constructor function and store it in a variable 
// b) Create a second person using different name and age values and store it in a separate 
// variable 
// c) Print out the properties of each person object to the console  
// d) Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 
// e) Add a canDrive method to both the constructor function and the class that returns true 
// if the person is old enough to drive. 

// the below code is called a constructor function
// it is a function that creates an object
// it is called a constructor function because it is used to construct objects
// it takes the values name and age
// and assigns them to the object
// it also assigns the value true to the human property
// so we have a function called Person
// which takes the arguments name and age
// and assigns them to the object
// and assigns the value true to the human property

// then we added a method / function called canDrive
// which returns true if the age is greater than or equal to 18
// and false if the age is less than 18
// it takes the age property of the object
// and checks if it is greater than or equal to 18

function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
    this.canDrive = function() {
        return this.age >= 18;
    };
}

// Create 2 persons using the constructor function
// below we have created 2 persons using the constructor function
// the first person is called person1
// and has the name 'Max' and the age 25
// the second person is called person2
// and has the name 'Sam' and the age 30
// we then log each person to the console

const person1 = new Person('Max', 25);
const person2 = new Person('Sam', 30);

console.log(person1, person2); 

// output:
// Person {
//     name: 'Max',
//     age: 25,
//     human: true,
//     canDrive: [Function (anonymous)]
//   } Person {
//     name: 'Sam',
//     age: 30,
//     human: true,
//     canDrive: [Function (anonymous)]

// to get the output of canDrive we need to then also 
// call the canDrive method on each person object like so:


console.log(person1.canDrive(), person2.canDrive()); 
// output: true true

// Rewrite as a class called PersonClass
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    canDrive() {
        return this.age >= 18;
    }
}

// here we add a new class called PersonClass
// it has a constructor method
// which takes the arguments name and age
// and assigns them to the object
// and assigns the value true to the human property
// so we have a class called PersonClass
// then we added in a method / function called canDrive
// which returns true if the age is greater than or equal to 18


// Create a third person using the class
const person3 = new PersonClass('Ella', 30);

console.log(person3); // Output: PersonClass { name: 'Ella', age: 30, human: true }
console.log(person3.canDrive()); // Output: true