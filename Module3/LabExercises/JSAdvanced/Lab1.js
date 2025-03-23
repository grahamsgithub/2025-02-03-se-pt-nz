// 1. makeCounter below is a decorator function which creates and returns a function that 
// increments a counter. 

// a) Create a second counter counter2 using the makeCounter 
// function and test to see if 
// it remains independent to counter1

// b) Modify makeCounter so that it takes an argument 
// startFrom specifying where the 
// counter starts from (instead of always starting from 0)

// c) Modify makeCounter to take another argument incrementBy, \
// which specifies how much each call to 
// counter() should increase 
// the counter value by.

// in the below code the makeCounter function is a 
// closure function that returns a function that 
// increments a counter the currentCount variable 
// is a private variable that is not accessible from 
// outside the function

// we have added a startFrom parameter to the makeCounter function 
// that specifies the starting value of the counter
// which is entered as input when the function is called
// See 3 entered below as the starting value
// and so the counter starts from 3 instead of 0
// as before

// we have added an incrementBy parameter to
// the makeCounter function that specifies the
// increment value of the counter
// which is entered as input when the function is called
// See 2 entered in makeCounter(3,2) below 
// as the increment value and so the counter 
// increments by 2 instead of 1 as before

function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function() {
    currentCount = currentCount + incrementBy;
    console.log(currentCount)
    return currentCount;
    };
    }
let counter1 = makeCounter(3,2);
counter1(); // 1
counter1(); // 2
counter1(); // 3
counter1(); // 4

// a) Create a second counter counter2 using the makeCounter 
// function and test to see if 
// it remains independent to counter1
    
let counter2 = makeCounter(3,2);
counter2(); // 1
counter2(); // 2

console.log("Counter 1:"+ counter1());
console.log("Counter 2:"+ counter2());
console.log(counter1 == counter2);

// in the above code counter1 and counter2 are independent 
// they are not sharing the same value of currentCount
// but are increased similarly by being called only
// and the boolean test shows false

