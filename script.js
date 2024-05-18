// Navbar 
const menuEl = document.querySelector('.menu');
const navbarEl = document.querySelector('.navbar');

menuEl.addEventListener ('click', () => {
    navbarEl.classList.toggle('change')
    menuEl.classList.toggle('change')
})
// End Of Navbar