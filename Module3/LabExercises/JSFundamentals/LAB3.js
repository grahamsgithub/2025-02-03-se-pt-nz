// Which of the following console.log messages will print? Why? 
// if (0) console.log('#1 zero is true') 
// if ("0") console.log('#2 zero is true') 
// if (null) console.log('null is true') 
// if (-1) console.log('negative is true') 
// if (1) console.log('positive is true')

if (0) console.log('#1 zero is true') 

// output won't print
// because if(0) is a false value in js so when the if condition is false
// the code won't be executed

if ("0") console.log('#2 zero is true')

// output will print
// because if("0") is a true value in js because a non-empty string is 
// seen as true so if("0") means true so the code will be executed 

if (null) console.log('null is true')

// output won't print
// because if(null) is a false value in js so when the if condition is false
// the code won't be executed

if (-1) console.log('negative is true')

// output will print
// because if(-1) is a true value in js because a negative number is
// seen as true so if(-1) means true so the code will be executed

if (1) console.log('positive is true')
// output will print
// because if(1) is a true value in js because a positive number is
// seen as true so if(1) means true so the code will be executed

// output of the above code block in total is:

// #2 zero is true
// negative is true
// positive is true

// NB RULE
//  if() = true means run code 
//  if() = false means don't run code
//  and:
//  if() will be false when:
//   the value is 0, null, undefined, NaN, or an empty string ("").
// if() will be true when:  
// the value is 1, -1, "0", or any other string.