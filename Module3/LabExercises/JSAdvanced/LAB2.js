// 2. The following delayMsg function is intended to be used to delay printing a message until 
// some time has passed.  
// a) What order will the four tests below print in? Why? 

// Print order:
// This message will be printed after a delay: #4: Not delayed at all
// This message will be printed after a delay: #3: Delayed by 0ms
// This message will be printed after a delay: #2: Delayed by 20ms
// This message will be printed after a delay: #1: Delayed by 100ms

// // NB this order 4,3,2,1 happens because 
// when using setTimeout it will delay execution
// of the function passed as the first argument
// by the number of milliseconds passed as the second argument
// so that gives us the order of 3,2,1
// and even though the last setTimeout (3) is set to 0ms
// it still won't print first (despite being higher on the 
// page than the delayMsg called without setTimeout) because
// NB setTimeout is an asynchronous function
// which is always executed after the synchronous code 
// (delayMsg without setTimeout)


// b) Rewrite delayMsg as an arrow function 

// c) Add a fifth test which uses a large delay time 
// (greater than 10 seconds) 

// d) Use clearTimeout to prevent the fifth test from printing at all. 

const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`) 

//in the above code if the arrow function only has 
// one parameter then it can be written without the curly brackets
 
 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')

const timeoutId = setTimeout(delayMsg, 11000, '#5: Delayed by 11 seconds'); 

// in the above line the timeoutId variable is storing the 
// instance of the id of this timeout so that it can be cleared later
// so when we use clearTimeout(timeoutId) it will clear the timeout
// of that specific timeout 

// clearTimeout prevents fifth test from printing
// using the timeoutId variable stored above
clearTimeout(timeoutId);
