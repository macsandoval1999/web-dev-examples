import { getModalContent, getRandomServices, populateServiceOptions } from "./services.mjs";



// DOM Elements
const modal = document.getElementById("services-modal-container"); // The modal dialog element itself
const modalHeader = document.getElementById("services-modal-header"); // To populate modal header
const modalContent = document.getElementById("services-modal-content"); // To populate modal content
const modalClose = document.getElementById("services-modal-close"); // To close the modal



// Button IDs and categories
const categoryButtons = [
    { id: "maintenance-modal", category: "maintenance" },
    { id: "consultation-modal", category: "consultation" },
    { id: "custom-modal", category: "custom" }
];



// Open modal for a given category
function openModal(category) {
    const { header, content } = getModalContent(category); // Using the imported function to get header and content for the modals, we populate the modal elements and show the modal.
    modalHeader.innerHTML = header;
    modalContent.innerHTML = content;
    modal.showModal(); // Show the modal dialog
}

// Attach event listeners to modal open buttons
categoryButtons.forEach(({ id, category }) => { // For each button ID and category pair, add a click event listener to open the corresponding modal
    const btn = document.getElementById(id); // Get the button element by its ID
    if (btn) { // Check if the button exists
        btn.addEventListener("click", () => openModal(category)); // On click, open the modal for the specified category
    }
});

// Close modal
modalClose.addEventListener("click", () => modal.close()); // Honestly, the easiest way to close the modal. Use a click event listener that checks the clicked target. If its the modal, close the modal.
modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
});



// Service Spotlight: pick 3 random services and display
function renderServiceSpotlight() {
    const container = document.getElementById("service-spotlight-container");
    const services = getRandomServices(3); // Using the imported function to get 3 random services
    // map over the services and create HTML for each, then join them into a single string and set as innerHTML of the container
    container.innerHTML = services.map((service) => `
        <div class="service-spotlight-card">
          <h4>${service.name}</h4>
          <p>${service.description}</p>
          <span class="service-price">$${service.price.toFixed(2)}</span>
          <span class="service-duration">${service.duration}</span>
        </div>
      `
        )
}





// On page load
renderServiceSpotlight();
 
// Populate service options in the scheduling form
populateServiceOptions();





/****************************************************************
 * FORM SCRIPTING
 ***************************************************************/
// ***********TIME STAMP FOR FORMS
const timeStamp = document.getElementById('timestamp'); // Get the element with ID 'timestamp'
const date = new Date(); // Create a new Date object with the current date and time
timeStamp.value = date.toISOString(); // Set the value of the timestamp element to the current date and time in ISO format

// *************PHONE NUMBER FORMATTING
document.getElementById('phone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').substring(0, 10);
    let formatted = '';
    if (x.length > 6) {
        formatted = `(${x.substring(0, 3)}) ${x.substring(3, 6)}-${x.substring(6, 10)}`;
    } else if (x.length > 3) {
        formatted = `(${x.substring(0, 3)}) ${x.substring(3, 6)}`;
    } else if (x.length > 0) {
        formatted = `(${x}`;
    }
    e.target.value = formatted;
});

