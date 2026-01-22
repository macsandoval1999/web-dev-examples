
// Menu toggle functionality
const mobileNav = document.querySelector('nav');
const menuBtn = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show-mobile-menu');
    menuBtn.classList.toggle('show-mobile-menu');
}
);
