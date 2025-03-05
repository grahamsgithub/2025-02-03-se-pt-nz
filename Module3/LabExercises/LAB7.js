// The following object represents a basketball game and keeps track of the score as the 
// game progresses. 
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of 
// the example code works 
// b) Add a new method to print the full time final score 
// c) Add a new object property to keep track of the number of fouls and a method to 
// increment it, similar but separate to the score. Include the foul count in the half time and 
// full time console messages 
// // d) Test your object by chaining all the method calls together in different combinations. 
 
// in the below code we have an object called basketballGame
// with a score property of 0
// and four methods called freeThrow, basket, threePointer and halfTime
// each of these methods increments the score property by a different amount
// and the halfTime method logs a message to the console
// and includes the current score
// we have modified each of these methods to return this
// which allows us to chain them together
// using: return this;
// so we can call each method one after the other 
// using:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

// then we added a new method called fullTime
// which logs a message to the console
// it works the same as the halfTime method
// but it also logs the number of fouls
// because we added a fouls property to the basketballGame object
// first we added a fouls property to the basketballGame object
// here:
// fouls: 0,
// then we added a new method called foul
// which increments the fouls property by 1
// here:
// foul() {
//     this.fouls++; //++ increments the fouls by 1
//     return this;
// },
// then we added the fouls property to the fullTime method
// here:
// console.log(`Full-time score is ${this.score}, with ${this.fouls} fouls.`);
// and we added the foul method to the chain of methods
// here:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foul().halfTime().fullTime();

const basketballGame = { 
    score: 0, 
    fouls: 0,
    freeThrow() { 
        this.score++; 
        return this; // Enable chaining
    }, 
    basket() { 
        this.score += 2; 
        return this; 
    }, 

    threePointer() { 
        this.score += 3; 
        return this; 
    }, 
    foul() {
        this.fouls++; //++ increments the fouls by 1
        return this; 
    },
    halfTime() { 
        console.log('Halftime score is '+this.score); 
        return this; 
    }, 
    fullTime() {
        console.log(`Full-time score is ${this.score}, with ${this.fouls} fouls.`);
        return this; // Enable chaining
    }
} 
 
//modify each of the above object methods to enable function chaining as below: 
// basketballGame.basket().freeThrow().basket().threePointer().foul().halfTime().fullTime(); 

// output of the above code is:
// Halftime score is 8
// Full-time score is 8, with 1 fouls.

// if we re-arranged the chained methods like this:

basketballGame.basket().freeThrow().halfTime().basket().threePointer().foul().fullTime();

// so the same methods / functions but in a different order
// the output would be:
// Halftime score is 3
// Full-time score is 8, with 1 fouls.
// this shows that the order of the methods in the chain matters