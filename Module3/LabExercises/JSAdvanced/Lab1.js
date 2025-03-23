// 1. makeCounter below is a decorator function which creates and returns a function that 
// increments a counter. 

// a) Create a second counter counter2 using the makeCounter function and test to see if 
// it remains independent to counter1

function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    counter1(); // 1
    counter1(); // 2