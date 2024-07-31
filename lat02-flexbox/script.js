const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
// const logo = document.querySelector('nav .logo');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
    // logo.classList.toggle('slide2');
});