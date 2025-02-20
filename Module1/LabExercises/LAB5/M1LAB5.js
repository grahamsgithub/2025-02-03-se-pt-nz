// Create an array with 5 elements
// using the new Array() constructor
// then assign values to the elements
let favoritefruits = new Array();
favoritefruits[0] = "Apple";
favoritefruits[1] = "Banana";
favoritefruits[2] = "Orange";
favoritefruits[3] = "Mango";
favoritefruits[4] = "Pineapple";

// The below function will display the fruits
// in the array to the console
// each time the array is modified
// a new output will be displayed
// to display the changes in the array made using the array methods in the function displayFruits
// the code:      
// console.log(favoritefruits);
// will display the fruits in the array
// it does this by logging the array favoritefruits
// then when the array is modified the output is displayed again

function displayFruits(favoritefruits) {
    console.log("Initial array:", favoritefruits);
    
    // changing values at index positions
    favoritefruits[0] = "Strawberry";
    favoritefruits[4] = "Guava";
    console.log("After replacing elements at position 1 and 4:", favoritefruits);

    // unshift adds an element to the beginning of the array
    favoritefruits.unshift("Blueberry");
    console.log("After adding a new element to the beginning:", favoritefruits);

    // pop removes an element from the end of the array
    favoritefruits.pop();
    console.log("After removing the element at the end:", favoritefruits);

    console.log("Current array:", favoritefruits);

    // Remove an item from the middle of the array
    // using the splice method
    // the splice method takes two arguments
    // the first argument is the index of the element to remove
    // the second argument is the number of elements to remove
    // in this case we are removing the element at index 2
    // and removing 1 element which is Banana at this stage (0,1,2)
    favoritefruits.splice(2, 1);
    console.log("After removing an item from the middle:", favoritefruits);
}

// Call the function to display the fruits
displayFruits(favoritefruits);

// Have added and removed breakpoints in the code to see the changes in the array as it is modified.
// The breakpoints were removed to not interfere with the browswer console output above.