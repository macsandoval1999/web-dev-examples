// // ***************SCRIPT FOR NAVIGATION MENU TOGGLE******************

// // Store the selected elements that we are going to use
// const navbutton = document.querySelector('#ham-btn'); // nav button
// const navlinks = document.querySelector('#nav-bar'); // nav links container

// // Add event listener to the button to toggle the 'show' class on and off
// // When 'show' class is present, the navigation menu is visible thanks to CSS
// // When 'show' class is absent, the navigation menu is hidden thanks to CSS
// navbutton.addEventListener('click', () => {
//     navbutton.classList.toggle('show');
//     navlinks.classList.toggle('show');
// });



// -----Script for navigation menu toggle-----
// DOM elements
const menu = document.querySelector('nav');
const menuSymbol = document.querySelector('#ham-btn');
// Event listener
menuSymbol.addEventListener('click', function () {
    menu.classList.toggle('show');
    menuSymbol.classList.toggle('show');
});
