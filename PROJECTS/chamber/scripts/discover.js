import { places } from "../data/places.mjs";



// *********Create Place Cards*********
// Select the container where the cards will be appended
const container = document.querySelector(".places-container");
// Function to create and append cards to the container
function createCards(places) { // Function to create and append cards to the container
    container.innerHTML = ""; // Clear any existing content in the container
    places.forEach((place) => { //for each place in the places array
        const card = document.createElement("div"); // Create a div element for the card and add class
        card.classList.add("place-card");

        // Set the inner HTML of the card using template literals
        card.innerHTML = ` 
        <figure>
            <img src="${place["photo-url"]}" 
                alt="${place.name}" 
                loading="lazy"
                width="500" 
                height="300">
        </figure>
        <h2>${place.name}</h2>
        <address>${place.address}</address>
        <hr id="separator">
        <span>Cost: ${place.cost}</span>
        <p>${place.description}</p>

        <button title="Learn more about ${place.name}"><a href="${place.website}" target="_blank" rel="noopener noreferrer">Visit Website</a></button>
    `;

        container.appendChild(card);
    });
}
// Call the function to create and append the cards
createCards(places);



// *********Last Visit Message*********
// Select the message box element
const messageBox = document.querySelector("#visit-message");
// Retrieve the last visit timestamp from localStorage
const lastVisit = localStorage.getItem("lastVisit");
// Get the current timestamp
const currentTime = Date.now();
// Determine the message based on the last visit time
if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24)); // The 1000 * 60 * 60 * 24 converts milliseconds to days

    if (daysPassed < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

// Update the last visit timestamp in localStorage
localStorage.setItem("lastVisit", currentTime);
