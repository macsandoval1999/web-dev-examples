// ***************SCRIPT FOR GETTING FOOTER DATES******************

// Get current date
const today = new Date(); // Create a new Date object with the current date and time

// Get current year
//Used in: footer
const year = document.querySelector("#current-year"); // Select the element with id 'currentyear'
year.innerHTML = `${today.getFullYear()}`; // Set its inner HTML to the year stored in 'today'

// Alternative method to get year using textContent
    // const currentYear = document.querySelector('#currentyear');
    // currentYear.textContent = new Date().getFullYear();

// Set last modified date
//Used in: footer
const lastModified = document.querySelector('#last-modified'); // Select the element with id 'lastModified'
lastModified.innerHTML = `Last Modification: ${document.lastModified}`; // Set its inner HTML to the last modified date of the document


