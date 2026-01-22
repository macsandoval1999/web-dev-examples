// Import inventory and services data

import { inventory} from "./fetchers.mjs";
import { saveVehicle, unsaveVehicle, isVehicleSaved } from "./check-saved.mjs";



// Build modals for vehicle details
export function buildModal(vehicle) {
    const modalContainer = document.getElementById('vehicle-modal-container');
    modalContainer.innerHTML = `
        <span class="close-button">&times;</span>
        <div class="modal-content">
            <picture>
                <source media="(min-width: 600px)" srcset="${vehicle.imageLarge}" alt="${vehicle.make} ${vehicle.model}" loading="lazy" width="380" height="230">
                <img src="${vehicle.imageSmall}" alt="${vehicle.make} ${vehicle.model}" loading="lazy" width="480" height="290">
            </picture>
            <h2>#${vehicle.id}<br><br>${vehicle.year} ${vehicle.make} ${vehicle.model}</h2>
            <p><strong>Price:</strong> $${vehicle.price.toLocaleString()}</p>
            <p><strong>Mileage:</strong> ${vehicle.mileage.toLocaleString()} miles</p>
            <p><strong>Color:</strong> ${vehicle.color}</p>
            <p><strong>Description:</strong>
            <p>${vehicle.description}</p>
            <p><strong>HP:</strong> ${vehicle.hp} HP, <strong>Torque:</strong> ${vehicle.torque} lb-ft</p>
            <p><strong>0-60 mph:</strong> ${vehicle.zeroSixty} seconds, <strong>Top Speed:</strong> ${vehicle.topSpeed} mph</p>
            <p><strong>MPG:</strong> ${vehicle.mpg}</p>
            <P><strong>Gas Capacity:</strong> ${vehicle.gastank} gallons</p>
            <p><strong>Features:</strong></p>
            <ul>
                ${vehicle.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
    // Show the dialog
    modalContainer.showModal();

    // Close on button
    modalContainer.querySelector('.close-button').addEventListener('click', () => {
        modalContainer.close();
    });
    // Close on outside click
    modalContainer.addEventListener('click', (e) => {
        // e refers to the name of a click event, it could be named anything. You could name it banana and it would still work as long as you reference banana below. Target is the element that was clicked. Target is a method and needs a variable to call it.
        // Here we are saying if the thing that was clicked is the modal container itself (the background), then close the modal.
        if (e.target === modalContainer) {
            modalContainer.close();
        }
    });
    // Close on Escape key
    // Here we are saying if the Escape key is pressed, then close the modal. Again, e is just a variable name for the event that is being listened for. In other words, if an event of keydown happens, then check if the key pressed is Escape.
    modalContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalContainer.close();
        }
    });
}



// Build Inventory Cards and add modals
export function buildCards(data = inventory) { // Default to full inventory if no data is passed data = inventory. This way, if we call buildCards() without any arguments, it will use the full inventory by default. After the  initial build, we can pass filtered type. 
// For sorting, we call this function inside the sortAndBuildCards function and pass the sorted array so it builds cards based on the sorted data. This way, we can filter and sort the inventory dynamically.
    const cardsContainer = document.getElementById('inventory-cards');
    cardsContainer.innerHTML = '';
    data.forEach(vehicle => {
        const card = document.createElement('div');
        card.classList.add('vehicle-card');
        card.innerHTML = `
            <div class="vehicle-image-container"></div>
                <picture>
                    <source media="(min-width: 600px)" srcset="${vehicle.imageLarge}" alt="${vehicle.make} ${vehicle.model}" loading="lazy" width="480" height="290">
                    <img src="${vehicle.imageSmall}" alt="${vehicle.make} ${vehicle.model}" loading="lazy" width="380" height="230">
                </picture>
            </div>
            <h3>${vehicle.year} ${vehicle.make} ${vehicle.model}</h3>
            <p>Price: $${vehicle.price.toLocaleString()}</p>
            <span class="vehicle-card-id">#${vehicle.id}</span>
        `;

        // Save button
        const saveButton = document.createElement('button');
        saveButton.title = "Save to favorites"; // Accessibility
        saveButton.classList.add('save-button'); // For styling
        // Set heart state based on saved status
        const isSaved = isVehicleSaved(vehicle.id); // Get saved status using the imported function which checks localStorage to see if the vehicle ID is in the "saved" array. If it is, returns true, else false.
        saveButton.innerHTML = isSaved ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'; // ? means if, : means else. Here we are saying if isSaved is true use solid heart, else use regular heart. 
        card.appendChild(saveButton);

        // Prevent modal from opening when clicking the save button
        // This stops the click event from bubbling up to the card, so the modal doesn't open when clicking the save button.
        saveButton.addEventListener('click', (e) => {
            e.stopPropagation(); // stopPropagation is a built-in method that stops an event from bubbling up to parent elements. Here we are saying if the save button is clicked, don't let that click event bubble up to the card element.
            const icon = saveButton.querySelector('i'); // Get the icon element inside the button
            // Check if the vehicle is already saved. This is basically toggling the saved state using the heart icons and imported functions to save/unsave the vehicle ID in localStorage.
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                saveVehicle(vehicle.id);
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                unsaveVehicle(vehicle.id);
            }
        });

        // Open modal when clicking anywhere else on the card
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.save-button')) { // closest is a built-in method that checks if the clicked element or any of its parents match the selector. Here we are saying if the clicked element is not the save button or inside the save button, then open the modal. The siblings of the save button and its parents will still open the modal. The buttons ability to open the modal was blocked above with stopPropagation.
                buildModal(vehicle);
            }
        });

        cardsContainer.appendChild(card);
    });
}
