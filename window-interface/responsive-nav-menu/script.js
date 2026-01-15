
const hambutton = document.querySelector('.🍔');
const mainnav = document.querySelector('.navigation');

// Toggle the responsive class on the navigation menu when the hamburger button is clicked.
hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive')});



// To solve the mid resizing issue with responsive class [window.onresize]
window.addEventListener('resize', () => {
    if (window.innerWidth > 760) { // window.innerWidth includes the scrollbar (if any), document.documentElement.clientWidth does not
        mainnav.classList.remove('responsive');
    }
});

/*
// Old way to solve the mid resizing issue with responsive class [window.onresize]

window.onresize = function () {
    if (window.innerWidth > 760) {
        mainnav.classList.remove('responsive');
    }
};

*/





// ============================

const asideMessage = document.querySelector('aside');
window.addEventListener('resize', () => {
    asideMessage.innerHTML = `
    <p>Window inner width is ${window.innerWidth} pixels</p>
    <p>Window inner height is ${window.innerHeight} pixels</p>
    <p>Window outer width is ${window.outerWidth} pixels</p>
    <p>Window outer height is ${window.outerHeight} pixels</p>
    `;
});