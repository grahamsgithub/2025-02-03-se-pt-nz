// dummy log in function just for testing purposes

function loginChecker() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "email@email.com" && password === "password") {
        alert("Login successful!");
        window.location.assign("index.html"); // Redirect to home.html
    } else {
        alert("Invalid username or password.");
    }
}

// <!-- Script to create and display characterChoice cards on quoteMain.html -->
// Function to fetch and parse characterChoices.json and display cards
function displaycharacterChoices() {
    fetch('resources/characterChoices.json') // Path to the JSON file
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            console.log("Parsed JSON data:", json); // Log the JSON data for debugging
    
            // Call makeCards for each item in the JSON array
            json.forEach(choice => {
                // below code uses makCards and 
                makeCards(choice.cardId, choice.cardImage, choice.cardTitle, choice.cardDescription);
            });
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
    }
    
// <!-- Script to create and display 4 cards -->
// Function to fetch and parse homePageChoices.json and display cards
function displayHomePageChoices() {
fetch('resources/homePageChoices.json') // Path to the JSON file
    .then(response => response.json()) // Parse the response as JSON
    .then(json => {
        console.log("Parsed JSON data:", json); // Log the JSON data for debugging

        // Call makeCards for each item in the JSON array
        json.forEach(choice => {
            // below code uses makCards and 
            makeCards(choice.cardId, choice.cardImage, choice.cardTitle, choice.cardDescription);
        });
    })
    .catch(error => console.error("Error fetching or parsing JSON:", error));
}

// Function to create and display a card
function makeCards(cardId, cardImage, cardTitle, cardDescription) {
// Get the template and clone it
const template = document.getElementById("card-template").content.cloneNode(true);

// Populate the card with data
template.querySelector(".card-title").innerText = cardTitle;
template.querySelector(".card-text").innerText = cardDescription;
template.querySelector(".card-img-top").src = cardImage;
template.querySelector(".card").id = `card-${cardId}`;

 // Set the onclick event for the button to call navChecker with the cardId
 const button = template.querySelector("#buttonIndexNav");
 button.setAttribute("onclick", `navChecker(${cardId})`);



// Append the cloned template to the container so it will be displayed
document.getElementById("card-container").appendChild(template);
}
// Get the current page's filename
const currentPage = window.location.pathname.split("/").pop();

// Call functions based on the current page
if (currentPage === "index.html") {
    displayHomePageChoices(); // Call this function only on index.html
} else if (currentPage === "quoteMain.html") {
    displaycharacterChoices(); // Call this function only on quoteMain.html
}
function navChecker(cardId) {
    // Get the current page's filename
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html") {
        // Handle cases specific to the index.html page
        switch (cardId) {
            case 1:
                window.location.href = "quoteMain.html";
                break;
            case 2:
                window.location.href = "guessWhoSaid.html";
                break;
            case 3:
                playThemeSong();
                break;
            case 4:
                window.location.href = "uploadQuote.html";
                break;
            default:
                console.error("Invalid card ID on index.html:", cardId);
        }
    } else if (currentPage === "quoteMain.html") {
        // Handle cases specific to the quoteMain.html page
        switch (cardId) {
            case 1:
                // these IDs correspond to different characters
                window.location.href = "andy.html";

                break;
            case 1:
                    // these IDs correspond to different characters
                    window.location.href = "ann.html";

                    break;
            case 3:
                 // these IDs correspond to different characters
                 window.location.href = "ron.html";
                 break;
            case 4:
                 // these IDs correspond to different characters
                 window.location.href = "leslie.html";
                 
                 break;
                        
            default:
                console.error("Invalid card ID on quoteMain.html:", cardId);
        }
    } else {
        console.error("navChecker called on an unsupported page:", currentPage);
    }
}

function displayQuoteBlock() {
    let quotes = []; // Store the filtered quotes
    let currentIndex = 0; // Track the current quote index

    // Fetch the JSON file containing quotes
    fetch('resources/parksAndRecQuotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(json => {
            console.log("JSON object logged below:");
            console.log(json); // Log the JSON array to the console for testing

            // Filter keys that contain "RonS" and extract the quotes
            quotes = Object.keys(json)
                .filter(key => key.includes("RonS"))
                .map(key => json[key]); // Extract only the values (quotes)

            if (quotes.length === 0) {
                console.warn("No quotes found for 'RonS'.");
                return;
            }

            // Display the first quote
            updateQuote();
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));

    // Function to update the displayed quote
    function updateQuote() {
        const quoteBlock = document.getElementById("quoteBlock");
        if (!quoteBlock) {
            console.error("quoteBlock element not found in the DOM.");
            return;
        }

        // Check if all quotes have been displayed
        if (currentIndex >= quotes.length) {
            quoteBlock.textContent = "No more quotes to display.";
            return;
        }

        // Display the current quote
        quoteBlock.textContent = quotes[currentIndex];

        // Increment the index for the next quote
        currentIndex++;
    }

    // Attach the updateQuote function to the button's click event
    const button = document.querySelector("button[onclick='displayQuoteBlock()']");
    if (button) {
        button.onclick = updateQuote;
    }
}


function playThemeSong() {
    let audioElement = document.getElementById("themeAudio");
    if (!audioElement) {
        audioElement = document.createElement("audio");
        audioElement.id = "themeAudio";
        audioElement.src = "resources/theme.mp3";
        audioElement.controls = true;
        audioElement.style.display = "block";
        document.getElementById("card-container").appendChild(audioElement); // Append to a specific container
    }
    audioElement.play();
}
    
function make4Cards() {
        for (let i = 0; i < 4; i++) {
            // Get the template and clone it 
            const template = document.getElementById("card-template").content.cloneNode(true);

            // Append the cloned template to the container so it will be displayed
            document.getElementById("card-container").appendChild(template);
        }
    }

    // Get the button
    const backToTopButton = document.getElementById("backToTop");

    // Scroll to the top when the button is clicked
    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    const localObjectFromJSON ={};
    // Fetch locally saved json file containing quotes
    fetch('resources/parksAndRecQuotes.json')
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            console.log("JSON object logged below:");
            console.log(json); // Log the JSON array to the console for testing
        // Iterate over the key-value pairs in the JSON object
        Object.entries(json).forEach(([key, value]) => {
        localObjectFromJSON[key] = value; // Save each key-value pair into the local object
    });

    console.log("Locally saved object below:");
    console.log(localObjectFromJSON); // Log the updated localObjectFromJSON
        })






