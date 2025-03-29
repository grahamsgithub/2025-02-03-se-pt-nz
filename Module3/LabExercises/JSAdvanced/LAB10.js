// 10. Fetch is a browser-based function to send a request and receive a response from a server, 
// which uses promises to handle the asynchronous response.  
// The below fetchURLData uses fetch to check the response for a successful status 
// code, and returns a promise containing the JSON sent by the remote server if successful 
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in the 
// comments before the function.) 
// a) Write a new version of this function using async/await 
// b) Test both functions with valid and invalid URLs 
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, 
// using Promise.all to combine the results. 
 
// run 'npm init' and accept all the defaults 
// run 'npm install node-fetch' 
// run 'npm pkg set type=module' 
 
import fetch from 'node-fetch' 
globalThis.fetch = fetch 
 
function fetchURLData(url) { 
    let fetchPromise = fetch(url).then(response => { 
        if (response.status === 200) { 
            return response.json(); 
        } else { 
            throw new Error(`Request failed with status ${response.status}`); 
        } 
    }); 
 
    return fetchPromise; 
} 

fetchURLData('https://jsonplaceholder.typicode.com/todos/1') 
.then(data => console.log(data)) 
.catch(error => console.error(error.message));

fetchURLData('https://json/1') // invalid URL
.then(data => console.log(data)) 
.catch(error => console.error(error.message));



// a) Write a new version of this function using async/await 

async function fetchURLDataAsync(url) {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Test both functions with valid and invalid URLs


fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
 
fetchURLDataAsync('https://json/1') // invalid URL
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

//     c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, 
// using Promise.all to combine the results.

// NB I didn't do the below. It is not my own work.
// Got solution online and copied pieces and such
// I adapted most of it and am
// still not too sure about how / why this works
//

async function fetchMultipleURLs(urls) {
    try {
        const fetchPromises = urls.map(url => fetchURLDataAsync(url));
        const results = await Promise.all(fetchPromises);
        return results;
    } catch (error) {
        console.error(error.message);
    }
}
// Test the function with multiple URLs
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];
fetchMultipleURLs(urls)
    .then(data => console.log(data))
    .catch(error => console.error(error.message));
