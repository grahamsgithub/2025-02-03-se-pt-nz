// 9. We can delay execution of a function using setTimeout, where we need to provide both 
// the callback function and the delay after which it should execute. 
// a) Create a promise-based alternative randomDelay() that delays execution for a 
// random amount of time (between 1 and 20 seconds) and returns a promise we can use 
// via .then(), as in the starter code below 
// b) If the random delay is even, consider this a successful delay and resolve the promise, 
// and if the random number is odd, consider this a failure and reject it 
// c) Update the testing code to catch rejected promises and print a different message 
// d) Try to update the then and catch messages to include the random delay value 
 
// Not sure I understand this one correctly but I think it is asking 
// for a function that delays execution for a random amount of time
// between 1 and 20 seconds and returns a promise that resolves 
// if the delay is even
// and rejects if the delay is odd.
// by printing a message to the console
// that includes the random delay value
// and the success or failure message
// from the promise's resolve or reject

function randomDelay() { 
    return new Promise((resolve, reject) => { 
        const delay = Math.floor(Math.random() * 20000) + 1000; // random delay between 1 and 20 seconds
        setTimeout(() => { 
            if (delay % 2 === 0) { 
                resolve(`Success! Delay was ${delay} ms`); 
            } else { 
                reject(`Failure! Delay was ${delay} ms`); 
            } 
        }, delay); 
    });
} 

// Handle the resolved and rejected promises

// the below code calls the randomDelay function
// and handles the resolved and rejected promises
// by printing a message to the console
randomDelay()
    .then(message => console.log(message)) // Print the success message
    .catch(error => console.error(error)); // Print the failure message