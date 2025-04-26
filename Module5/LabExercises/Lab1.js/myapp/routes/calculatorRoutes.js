// Module 5 Lab 2
// create multiple routes for a calculator app covering 
// the four basic operations: addition, subtraction, multiplication, 
// and division. Each route should accept two numbers 
// as query parameters and return the result in JSON format. 

const express = require('express');
const router = express.Router();

// Route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(`Addition: ${sum}`);
    res.status(200).json({ result: sum });
});

// Route for subtracting two numbers
router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2;
    console.log(`Subtraction: ${difference}`);
    res.status(200).json({ result: difference });
});

// Route for multiplying two numbers
router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(`Multiplication: ${product}`);
    res.status(200).json({ result: product });
});

// Route for dividing two numbers
router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    if (number2 === 0) {
        console.log('Division by zero error');
        res.status(400).json({ error: 'Division by zero is not allowed' });
    } else {
        let quotient = number1 / number2;
        console.log(`Division: ${quotient}`);
        res.status(200).json({ result: quotient });
    }
});

module.exports = router;
// Module 5 Lab 2
// the above routes are for the calculator app
// the routes are defined using the express.Router() method
// each can be accessed in the browser by going to the URL
// http://localhost:3000/calculator/add?num1=5&num2=3
// http://localhost:3000/calculator/subtract?num1=5&num2=3
// http://localhost:3000/calculator/multiply?num1=5&num2=3
// http://localhost:3000/calculator/divide?num1=5&num2=3