// require the express module/package
const express = require('express')
// create an instance of express
// this instance is an object that has methods for 
// routing HTTP requests
const app = express()
// define a port number for the server to listen on
const port = 3000

// define a route for the root URL ("/")
// when a GET request is made to this URL, 
// the server will respond with "Hello World!"
// the callback function takes two arguments: req (request) 
// and res (response)
// req is an object that represents the HTTP request
// res is an object that represents the HTTP response
// the res.send() method sends a response to the client
app.get('/', (req, res) => {
res.send('Hello from server 3000!')
})

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})

// LAB 2
// import the calculator routes from the calculatorRoutes.js file
// import all calculator routes (up the top)

// add update to serve static files from the public directory
// Serve static files from the "public" directory
app.use(express.static('public'));

 const calculatorRoutes = 
require('./routes/calculatorRoutes');
 // map the calculator routes to our app
 app.use('/calculator', calculatorRoutes);