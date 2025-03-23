// 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, 
// similar requests until there's a brief pause, then only executing the most recent of those 
// requests. See https://www.techtarget.com/whatis/definition/debouncing  
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server 
// requests being initiated if a user clicks repeatedly on a button. 
// Using the following code to test and start with: 
// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and 
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second 
// pause, the most recent call to func should be executed and any others ignored. 
// b) Extend the debounce decorator function to take a second argument ms, which defines the 
// length of the period of inactivity instead of hardcoding to 1000ms 
// c) Extend debounce to allow the original debounced function printMe to take an argument 
// msg which is included in the console.log statement. 

msWait = 1500; // 1.5 second
msg ='Added message stored in msg'; // added message to be printed
function debounce (func, ms) {
    let timeout = 0;
    return function() {
        clearTimeout(timeout); // clears any previous timeouts
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    // the above line is equivalent to:
    // timeout = setTimeout(function() { func.apply(this, arguments); }, ms);
    }
}

// in the above code, the function debounce takes two arguments
// func and ms (so for us meaning printMe and msWait). 
// It returns a function that can take any number of arguments. 
// The first function clears any previous timeouts 
// and then sets a new timeout that calls the original func
// but using .apply to pass in the arguments
// this is a way to call a function with a specific context 
// and arguments so here we are calling the original function
// with the arguments that were passed to the debounced function.
// arguments is a special keyword in JavaScript that is an array-like object
// that contains all the arguments passed to the function.

function printMe(msg) { 
console.log(`printing debounced message + ${msg}`); 
} 
printMe = debounce(printMe, msWait); 
//create this debounce function for a) 
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 
// 1000ms of no calls 
setTimeout( printMe, 10,);  
setTimeout( printMe, 200);  
setTimeout( printMe, 300, msg); //added in msg to be printed