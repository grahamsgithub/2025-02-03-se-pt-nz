// Dummy login function just for testing purposes
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

// Function to fetch and parse characterChoices.json and display cards
function displaycharacterChoices() {
    fetch('resources/characterChoices.json') // Path to the JSON file
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            console.log("Parsed JSON data:", json); // Log the JSON data for debugging
    
            // Call makeCards for each item in the JSON array
            json.forEach(choice => {
                makeCards(choice.cardId, choice.cardImage, choice.cardTitle, choice.cardDescription);
            });
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}

// Function to fetch and parse homePageChoices.json and display cards
function displayHomePageChoices() {
    fetch('resources/homePageChoices.json') // Path to the JSON file
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            console.log("Parsed JSON data:", json); // Log the JSON data for debugging

            // Call makeCards for each item in the JSON array
            json.forEach(choice => {
                makeCards(choice.cardId, choice.cardImage, choice.cardTitle, choice.cardDescription);
            });
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}


function makeCards(cardId, cardImage, cardTitle, cardDescription) {
    // Get the template and clone it
    const template = document.getElementById("card-template").content.cloneNode(true);

    // Populate the card with data
    template.querySelector(".card-title").innerText = cardTitle;
    template.querySelector(".card-text").innerText = cardDescription;
    template.querySelector(".card-img-top").src = cardImage;
    template.querySelector(".card").id = `card-${cardId}`;

    // Set the data-card-id attribute and use a class for the button
    const button = template.querySelector(".buttonIndexNav");
    button.setAttribute("data-card-id", cardId);

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
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html") {
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
        switch (cardId) {
            case 1:
                window.location.href = "andy.html";
                break;
            case 2:
                window.location.href = "ann.html";
                break;
            case 3:
                window.location.href = "ron.html";
                break;
            case 4:
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
    let quotes = [];
    let currentIndex = 0;

    const currentPage = window.location.pathname.split("/").pop().split(".")[0];
    console.log(currentPage);

    fetch('resources/parksAndRecQuotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            console.log("JSON object logged below:");
            console.log(json);

            quotes = Object.keys(json)
                .filter(key => key.slice(0, 3).toLowerCase() === currentPage.slice(0, 3).toLowerCase())
                .map(key => json[key]);

            quotes = removeDuplicatesByFirstThreeWords(quotes);

            if (quotes.length === 0) {
                console.warn(`No quotes found for '${currentPage}' after removing duplicates.`);
                return;
            }

            updateQuote();
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));

    function updateQuote() {
        const quoteBlock = document.getElementById("quoteBlock");
        if (!quoteBlock) {
            console.error("quoteBlock element not found in the DOM.");
            return;
        }

        if (currentIndex >= quotes.length) {
            quoteBlock.textContent = "No more quotes to display.";
            return;
        }

        quoteBlock.textContent = quotes[currentIndex];
        currentIndex++;
    }

    const button = document.querySelector("button[onclick='displayQuoteBlock()']");
    if (button) {
        button.onclick = updateQuote;
    }
}

function removeDuplicatesByFirstThreeWords(quotes) {
    const uniqueQuotes = [];
    const seenFirstThreeWords = new Set();

    quotes.forEach(quote => {
        const firstThreeWords = quote.split(" ").slice(0, 3).join(" ");
        if (!seenFirstThreeWords.has(firstThreeWords)) {
            uniqueQuotes.push(quote);
            seenFirstThreeWords.add(firstThreeWords);
        }
    });

    return uniqueQuotes;
}

let currentQuoteKey = "";

function displayGuessQuote() {
    fetch('resources/parksAndRecQuotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            const keys = Object.keys(json);
            const values = Object.values(json);

            const randomIndex = Math.floor(Math.random() * values.length);

            const randomQuote = values[randomIndex];
            currentQuoteKey = keys[randomIndex];

            const quoteDiv = document.getElementById('showQuote');
            if (quoteDiv) {
                quoteDiv.textContent = randomQuote;
            } else {
                console.error("Element with ID 'showQuote' not found.");
            }
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}

function populateDropdown() {
    fetch('resources/parksAndRecQuotes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            const keys = Object.keys(json);

            if (!currentQuoteKey) {
                console.error("currentQuoteKey is not set.");
                return;
            }

            const correctOptionFormatted = currentQuoteKey
                .replace(/([A-Z])/g, ' $1')
                .replace(/[0-9]/g, '')
                .trim();

            // Original array
            const localArray = [
                "Ron Swanson", "Leslie Knope", "Andy Dwyer", "Tom Haverford",
                "Jeremy Jam", "Chris Traeger", "Jean Ralphio", "Donna Meagle",
                "April Ludgate", "Perd Hapley", "Ann Perkins"
            ];
// Spread copy into a new array and remove the correct option
const localArrayClean = [...localArray].filter(item => {
    // Compare the item directly with the correct option
    const isMatch = item.trim().toLowerCase() === correctOptionFormatted.trim().toLowerCase();
    console.log(`Comparing: "${item}" with "${correctOptionFormatted}" -> Match: ${isMatch}`);
    return !isMatch; // Exclude the correct option
});

console.log("Original Local Array:", localArray);
console.log("Correct Option Formatted:", correctOptionFormatted);
console.log("Cleaned Local Array:", localArrayClean);
console.log("Original Local Array:", localArray);
console.log("Correct Option Formatted:", correctOptionFormatted);
console.log("Cleaned Local Array:", localArrayClean);
            // Randomly select 2 options from the cleaned array
            const randomKeys = [];
            while (randomKeys.length < 2) {
                const randomKey = localArrayClean[Math.floor(Math.random() * localArrayClean.length)];
                if (!randomKeys.includes(randomKey)) {
                    randomKeys.push(randomKey);
                }
            }

            console.log("Randomly Selected Keys:", randomKeys);

            // Combine the correct option with the random options
            const dropdownOptions = [currentQuoteKey, ...randomKeys];
            dropdownOptions.sort(() => Math.random() - 0.5);

            const dropdownMenu = document.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.innerHTML = '';
                dropdownOptions.forEach(key => {
                    const formattedKey = key
                        .replace(/([A-Z])/g, ' $1')
                        .replace(/[0-9]/g, '')
                        .trim();

                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.className = 'dropdown-item';
                    link.href = '#';
                    link.textContent = formattedKey;

                    link.onclick = function () {
                        if (key === currentQuoteKey) {
                            alert("Right Answer!");
                        } else {
                            alert("Wrong Answer!");
                        }
                    };

                    listItem.appendChild(link);
                    dropdownMenu.appendChild(listItem);
                });
            } else {
                console.error("Dropdown menu not found.");
            }
        })
        .catch(error => console.error("Error fetching or parsing JSON:", error));
}




function playThemeSong() {
    let alertBox = document.getElementById("themeAlertBox");
    if (!alertBox) {
        alertBox = document.createElement("div");
        alertBox.id = "themeAlertBox";
        alertBox.style.position = "fixed";
        alertBox.style.top = "50%";
        alertBox.style.left = "50%";
        alertBox.style.transform = "translate(-50%, -50%)";
        alertBox.style.backgroundColor = "#ffffff";
        alertBox.style.border = "1px solid #ccc";
        alertBox.style.borderRadius = "8px";
        alertBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        alertBox.style.padding = "20px";
        alertBox.style.textAlign = "center";
        alertBox.style.zIndex = "1000";

        const audioElement = document.createElement("audio");
        audioElement.id = "themeAudio";
        audioElement.src = "resources/theme.mp3";
        audioElement.controls = true;
        audioElement.style.display = "block";

        const closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.marginTop = "10px";
        closeButton.style.padding = "5px 10px";
        closeButton.style.border = "none";
        closeButton.style.borderRadius = "4px";
        closeButton.style.backgroundColor = "#007bff";
        closeButton.style.color = "#ffffff";
        closeButton.style.cursor = "pointer";

        closeButton.onclick = function () {
            document.body.removeChild(alertBox);
        };

        alertBox.appendChild(audioElement);
        alertBox.appendChild(closeButton);
        document.body.appendChild(alertBox);
        audioElement.play();
    }
}

function make4Cards() {
    for (let i = 0; i < 4; i++) {
        const template = document.getElementById("card-template").content.cloneNode(true);
        document.getElementById("card-container").appendChild(template);
    }
}

const backToTopButton = document.getElementById("backToTop");
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const localObjectFromJSON = {};
fetch('resources/parksAndRecQuotes.json')
    .then(response => response.json())
    .then(json => {
        console.log("JSON object logged below:");
        console.log(json);
        Object.entries(json).forEach(([key, value]) => {
            localObjectFromJSON[key] = value;
        });
        console.log("Locally saved object below:");
        console.log(localObjectFromJSON);
    });

document.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("buttonIndexNav")) {
        const cardId = event.target.getAttribute("data-card-id");
        handleCardButtonClick(cardId);
    }
});

const cardClickCounts = JSON.parse(localStorage.getItem("cardClickCounts")) || {};

function handleCardButtonClick(cardId) {
    // Increment the click count for the card
    cardClickCounts[cardId] = (cardClickCounts[cardId] || 0) + 1;
    localStorage.setItem("cardClickCounts", JSON.stringify(cardClickCounts));
    console.log(`Card ${cardId} clicked. Updated counts:`, cardClickCounts);

    // Call navChecker to handle navigation or actions based on cardId
    navChecker(parseInt(cardId, 10));
}

// Function to handle card clicks on the quoteMain.html page
function quoteMainCardCounts(cardId) {
    // Retrieve the existing click counts from localStorage or initialize an empty object
    const quoteMainClickCounts = JSON.parse(localStorage.getItem("quoteMainClickCounts")) || {};

    // Increment the click count for the card
    quoteMainClickCounts[cardId] = (quoteMainClickCounts[cardId] || 0) + 1;

    // Save the updated counts back to localStorage
    localStorage.setItem("quoteMainClickCounts", JSON.stringify(quoteMainClickCounts));
    console.log(`Quote Main Card ${cardId} clicked. Updated counts:`, quoteMainClickCounts);

    // Call navChecker to handle navigation or actions based on cardId
    navChecker(parseInt(cardId, 10));
}

// Add an event listener for clicks on the quoteMain.html page
if (currentPage === "quoteMain.html") {
    document.addEventListener("click", (event) => {
        if (event.target && event.target.classList.contains("buttonIndexNav")) {
            const cardId = event.target.getAttribute("data-card-id");
            quoteMainCardCounts(cardId); // Use the new function for quoteMain.html
        }
    });
}