// 5. The following car object has several properties and a method which uses them to print a 
// description. When calling the function normally this works as expected, but using it from 
// within setTimeout fails. Why? 

// Why?
// This happens because the context of 'this' is lost when the function is called
// from within setTimeout.
// so this.make, this.model and this.year are referring to the context of the 
// car object and when called outside of set time out (like with car.description)
// it will work because the context of this is car object.
// but when called from within setTimeout the context of 'this' is lost
// and if used these if will then refer to the global object 
// and so becomes undefined)
// this happens because setTimeout automatically creates a new context for the
// function it calls inside it.

// a) Fix the setTimeout call by wrapping the call to car.description() inside a 
// function

// b) Change the year for the car by creating a clone of the original and overriding it

let car = { 
make: "Porsche", 
model: '911', 
year: 1964, 
 
    description() { 
        console.log(`[Line 65] This car is a ${this.make} ${this.model} from ${this.year}`);
        
    } 
}; 

let carClone = {...car}; //spread operator to clone the car object
carClone.year = 2000; // change the year for the car clone

carClone.description(); //returns updated year of cloned car object
 
car.description(); //still returns original year of car object original value unchanged
 
setTimeout(function() {
    car.description();
}, 200); //prints without error related to losing .this context

// c) Does the delayed description() call use the original values or the new values from 
// b)? Why? 

// in my case (see code above) it uses the original values because the setTimeout call is
// using car.description() which is referring to the original car object and my
// spread copied clone is named carClone (they are different objects).

// d) Use bind to fix the description method so that it can be called from within 
// setTimeout without a wrapper function 

let carClone2 = {...carClone}; 
//spread operator to clone the carClone object again
//just helping me sort through the code and outputs easier

setTimeout(carClone2.description.bind(carClone2), 200); 
// Using bind to fix the context loss of 'this' without wrapping with a function

// e) Change another property of the car by creating a clone and overriding it, and test that 
// setTimeout still uses the bound value from d) 

carClone2.make = 'Mercedes'; // change the model for the carClone2
carClone2.description(); //returns updated model of carClone2
car.description(); //still returns original model of car object original value unchanged