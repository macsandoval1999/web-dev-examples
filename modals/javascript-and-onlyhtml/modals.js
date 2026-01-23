// Get the modal element with the ID signup
const modal = document.querySelector("#signup");

// Get the button element classed .open-button
const openModal = document.querySelector(".open-button");
// When the button is clicked, open the modal
openModal.addEventListener("click", () => {
    modal.showModal(); // Remember, before this the modal is hidden as they are by default
});

// Get the button element classed .close-button
const closeModal = document.querySelector(".close-button");
// When the button is clicked, close the modal
closeModal.addEventListener("click", () => {
    modal.close();
});

