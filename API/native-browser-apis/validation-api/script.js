// Initiate event listener for the "Check Code" button. When clicked, it triggers the following function expression with the event object as its parameter.
document.querySelector("button").addEventListener("click", function (e) {
    const code = document.querySelector("#code"); // Get element with id "code" for code entry
    const message = document.querySelector("#message"); // Get element with id "message" to display code validity result

    if (code.checkValidity()) { // Check if the code input is valid using the Constraint Validation API. If valid, display success message.
        message.textContent = "A valid code was entered."; 
        message.style.backgroundColor = "#e5ffe5"; // Set background color to light green for valid input
    } else { // If code input is invalid, display error message
        message.textContent = "❌ The code is invalid. Please enter a valid one.";
        message.style.backgroundColor = "#ffe5e5"; // Set background color to light red for invalid input
    }
    message.style.visibility = "visible"; // Make the message visible
});



/* 
The visibility property in CSS controls whether an element is visible or hidden, but unlike display: none, it still takes up space in the layout.

Common values:
    visibility: visible;  // The element is shown (default)
    visibility: hidden;  // The element is hidden but still occupies space
    visibility: collapse; // For table elements, hides the row/column and removes its space

CSS Example:
    .hidden-message {
    visibility: hidden;
    }

Use visibility when you want to hide an element without affecting the layout of surrounding elements.
*/