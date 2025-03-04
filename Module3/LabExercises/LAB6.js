// a) Complete the inigo object by adding a lastName property and including it in the 
// greeting.  
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead 
// prints his famous catch phrase to the console. HINT: see 
// https://www.imdb.com/title/tt0093779/characters/nm0001597.  
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator. 


// in the below code we declare an Object
// called westley with a name property of 'Westley'
// and a numFingers property of 5

// then we declare an Object called rugen with a name property of 'Count Rugen'
// and a numFingers property of 6


const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 6 
} 
 
// below we declare an Object called inigo
// with a firstName property of 'Inigo'
// and a lastName property of 'Montoya'
// and a greeting property which is a function
// which takes a person argument
// and logs a greeting to the console
// and calls the getCatchPhrase function
// with the person argument
// what this means is that the greeting function
// will log a greeting to the console when called with a person argument
// so for use here person is westley and then rugen
// which are called by these lines: 
// inigo.greeting(westley) 
// inigo.greeting(rugen) 
// when we do this the greeting function is called
// which itself calls the nested getCatchPhrase function
// and it knows which object to test because we pass westley and rugen
// as the person argument / or parameter

const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Montoya',
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    getCatchPhrase: (person) => 
        person.numFingers === 6 
            ? 'You killed my father. Prepare to die.' 
            : 'Nice to meet you.'
}; 
 
// so in the above code each time we run the inigo.greeting function
// it will take the new argument (first westley) and it will
// run the greeting code and then the nested getCatchPhrase code
// which will test the number of fingers of the person argument
// and if it is 6 it will log 'You killed my father. Prepare to die.'
// otherwise it will log 'Nice to meet you.'
// so the output will be:
// Hello Westley, my name is Inigo Montoya. Nice to meet you.
// Hello Count Rugen, my name is Inigo Montoya. You killed my father. Prepare to


inigo.greeting(westley) 
inigo.greeting(rugen) 

