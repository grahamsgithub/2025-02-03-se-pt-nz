let worker = {
    
    getMultiplier() 
    {
        return Math.floor(Math.random() * 1_000_000); // large random number
    },
    
    slow(x) 
    {
        let random = 0, goal = x * this.getMultiplier(); // needs context to work
        for (let i = 0; i < goal; i++) random++;
        console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
        return random; // return large number
    }
};

function CachingDecorator(originalFunction)
{
    const cache = new Map(); // can also include outer environment variables via a closure
  
    return function(x)
           {
                if(cache.has(x))
                {
                    console.log('returned cached value for ' + x); 
                    return cache.get(x); // read and return the result from it
                }
                let result = originalFunction.call(this, ...arguments) // otherwise, call the original function and store the result
                cache.set(x, result); // then cache (remember) the result for next time
                return result;
           }
}
function loggingTimingDecorator(originalFunction) 
{ // decorator takes a function as parameter
    return function(x) 
           { // and returns that function with extra bits - timing/logging
                console.time('Function timer'); // start a timer
                console.log(`\nExecuting function ...`) // log a message
                const result = originalFunction.call(this, ...arguments) //
                //const result = originalFunction.apply(this, arguments); // execute the original function and store result
                console.timeEnd('Function timer'); // stop the timer
                return result; // return the result of running the original function
           }
}

let decoratedSlow = CachingDecorator(worker.slow.bind(worker))
let decoratedWithLogging = loggingTimingDecorator(decoratedSlow)
console.log(decoratedSlow(50))
console.log(decoratedWithLogging(50))