import { items } from "../discover.mjs";

// ------------------------
// BUILD CARDS
// ------------------------
const container = document.querySelector(".cards-container");

items.forEach((item, index) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.style.gridArea = `card${index + 1}`;

    card.innerHTML = `
    <h2>${item.title}</h2>

    <figure>
      <img src="${item.image}" 
           alt="${item.title}" 
           loading="lazy">
    </figure>

    <address>${item.address}</address>

    <p>${item.description}</p>

    <button>Learn More</button>
  `;

    container.appendChild(card);
});

// ------------------------
// LOCAL STORAGE MESSAGE
// ------------------------
const messageBox = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentTime = Date.now();

if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysPassed = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
        messageBox.textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        messageBox.textContent = "You last visited 1 day ago.";
    } else {
        messageBox.textContent = `You last visited ${daysPassed} days ago.`;
    }
}

localStorage.setItem("lastVisit", currentTime);

// ------------------------
// FOOTER YEAR
// ------------------------
document.getElementById("year").textContent = new Date().getFullYear();
