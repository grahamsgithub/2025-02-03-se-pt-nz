// The object below represents a single city. 
// a) Write a function that takes an object as an argument and uses a for…in loop to access 
// and print to the console each of those object properties and their values. Test it using 
// the sydney object below. 
// b) Create a new object for a different city with different properties and call your function 
// again with the new object. 

// the below 2 objects 
// represent 2 cities each with different properties
// stored in key value pairs 
// we do this with the foloowing syntax
// const objectName = { key: value, key: value, key: value }
// where key is the property name
// and value is the property value 

const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney' 
} 

const dunedin = { 
    name: 'Dunedin', 
    population: 120000,
    state: 'Otago', 
    founded: '1817', 
    timezone: 'Pacific/Auckland' 
};

// Function printing object properties and values

// so below we have a function called printObjectProperties
// which takes an argument called city
// the city in this case being either the sydney or dunedin object
// which we pass to it below using:
// printObjectProperties(sydney);
// printObjectProperties(dunedin);

// this functions code block uses a for loop
// this is a loop that
// iterates over the properties of an object
// so this line:
// for (let property in city) 
// will go through each property in the city object
// and perform the code block for each property
// so that this line:
// console.log(`${property}: ${city[property]}`);
// will log the property name and value to the console
// for each property in the city object start to finish
// using backticks and ${} to interpolate the property name and value
// see previous notes on interpolated strings
// so the output will be:

// name: Sydney
// population: 5121000
// state: NSW
// founded: 26 January 1788
// timezone: Australia/Sydney

function printObjectProperties(city) {
    for (let property in city) {
        console.log(`${property}: ${city[property]}`);
    }
}

printObjectProperties(sydney);

// below we call the function printObjectProperties
// and pass the dunedin object as the argument
// so the function will print the properties and values
// of the dunedin object
// so the output will now also have:

// name: Dunedin
// population: 120000
// state: Otago
// founded: 1817
// timezone: Pacific/Auckland

printObjectProperties(dunedin);

