// Initialize elements
const inputname = document.querySelector("#name");
const button = document.querySelector("button");
const message = document.querySelector('#message');

// Add event listener on click to store name in input.
// When the button is clicked, the storeName function will be executed.
button.addEventListener("click", storeName);

// Function to store name in sessionStorage
function storeName() {
    // Check if input with id "name" has a value before storing. If it does, store it in sessionStorage. If not, do nothing.
    if (inputname.value) {
        // Store the value of the input with id "name" in sessionStorage under the key "visitor". Or blank if value is falsy.
        sessionStorage.setItem("visitor", inputname.value) || "";
        // Clear the input field after storing the name.
        inputname.value = "";
        // Update button text to indicate name has been stored.
        button.textContent = "Name Stored. Thank you!";
    }
}

// Determine if there is a stored name and display message if true
// This runs when the page is loaded since this if statement is outside any function
// If there is a stored name in sessionStorage under the key "visitor", display a welcome message.
if (sessionStorage.getItem("visitor") !== null) {
    message.innerHTML = `Welcome Back ${sessionStorage.getItem("visitor")}❗`;
}
