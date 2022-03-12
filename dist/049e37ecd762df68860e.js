import "../style/style.css"

function burgerMenu() {
    const logoMenu = document.querySelector('.burger-logo-box')
    logoMenu.addEventListener('click', getMenu);
    function getMenu() {
        const menu = document.querySelector('.burger-menu');
        const logo = document.querySelector('.burger__logo');
        menu.classList.toggle("active")
        logo.classList.toggle('active')
    }
}
burgerMenu()


