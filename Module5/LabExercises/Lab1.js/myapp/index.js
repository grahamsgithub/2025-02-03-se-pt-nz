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


// Create a basic back-end application with multiple web servers running on different ports.
const app2 = express()
// define a new port number
const port2 = 3001
// define a unique route for the new root URL (eg. "/app2")
// NB browser access must now use http://localhost:3001/app2
app2.get('/app2', (req, res) => {
res.send('Hello from server 3001!')
})

// start the server on the new port
// with the new values for the port and URL
app2.listen(port2, () => {
console.log(`Example app listening
at http://localhost:${port2}`)
})

// OUTPUT:
// on browser at localhost:3000 = Hello from server 3000!
// on browser at localhost:3001/app2 = Hello from server 3001!