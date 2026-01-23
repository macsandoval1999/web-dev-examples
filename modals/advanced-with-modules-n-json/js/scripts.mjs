// IMPORT NEEDED DATA AND VARIABLES
import { temples } from "../data/temples.js";  // Import the data from the temples.js module
import { baseURL } from "../data/temples.js";  // Import the baseURL from the temples.js module



// SELECT DOM ELEMENTS
const dialogAbleContent = document.querySelector('#show-here');
const dialogBox = document.querySelector('#my-dialog');
const myTitle = document.querySelector('#my-dialog h2');
const closeButton = document.querySelector('#my-dialog button');
const dialogText = document.querySelector('#my-dialog p');



// CLOSE DIALOG EVENT LISTENER
closeButton.addEventListener('click', () => {
    dialogBox.close();
});



// LOOP THROUGH THE ARRY OF JSON ITEMS
function displayItems(data) {
    data.forEach((item) => {
        // CREATE ELEMENTS
        const container = document.createElement('div');
        container.classList.add('temple-card');
        const photo = document.createElement('img');
        photo.src = `${baseURL}${item.path}`;
        photo.alt = `Image of the ${item.name}`;
        photo.loading = 'lazy';
        photo.addEventListener('click', () => {
            // POPULATE AND OPEN DIALOG
            // The attributes of 'item' can be used here, like name, dedicated, person, etc. You find them in the JSON data, but when you get data from an API, check the image attribute names in devtools by going to the elements tab, then expanding the dialog element to see the data that was added and what the attribute names are.
            myTitle.textContent = item.name;
            dialogText.innerHTML = `<strong>Dedicated:</strong> ${item.dedicated}<br><strong>Dedicatory Person:</strong> ${item.person}`;
            dialogBox.showModal();
        });
        container.appendChild(photo);

        dialogAbleContent.appendChild(container);
    })
}

displayItems(temples);