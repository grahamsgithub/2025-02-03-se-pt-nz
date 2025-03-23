// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the 
// sequence is the sum of the previous 2. 
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. 
// a) Write a function printFibonacci() using setInterval that outputs a number in 
// the Fibonacci sequence every second. 
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout 
// calls to do the same thing 
// c) Extend one of the above functions to accept a limit argument, which tells it how many 
// numbers to print before stopping.

limit = 10; // limit of numbers to print

// the below code is a function that prints the fibonacci sequence using setInterval
// it takes a limit argument which specifies how many numbers to print (limit)
// it returns a promise that resolves when the limit is reached
// this is a way of notifying the caller when the function is done
// so for us here it runs the fibonacci sequence printing every second
// then when the limit is reached it resolves the promise
// and then runs the printFibonacciTimeouts function
// which does the same thing but using nested setTimeout calls
// instead of setInterval

// NB promise sytax = new Promise((resolve, reject) => { ... });
// how this works is a promise using resolve will signal when the function is done
// so the caller can then do something else after (for us running printFibonacciTimeouts)

const printFibonacci = (limit) => {
    return new Promise((resolve) => {
        let x = 0;
        let y = 1;
        let z = 0;
        let count = 0; // counter of how many numbers have been printed
        const intervalId = setInterval(() => {
            if (count >= limit) {
                clearInterval(intervalId); // clear interval if limit reached
                resolve(); // resolve the promise when done
            } else {
                console.log(z);
                z = x + y;
                x = y;
                y = z;
                count++;
            }
        }, 1000);
    });
}

const printFibonacciTimeouts = (limit) => {
    let x = 0;
    let y = 1;
    let z = 0;
    let count = 0; // counter of how many numbers have been printed
    const printNumber = () => {
        if (count >= limit) {
            return; // return if limit reached
        }
        console.log(z);
        z = x + y;
        x = y;
        y = z;
        count++;
        setTimeout(printNumber, 1000);
    }
    printNumber();
}

// Run printFibonacci first, then printFibonacciTimeouts
printFibonacci(limit).then(() => {
    printFibonacciTimeouts(limit);
});