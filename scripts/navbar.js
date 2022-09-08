let navbar = document.querySelector('.navbar__lines');

navbar.addEventListener('click', showMenu);

function showMenu() {
    let lines = document.querySelectorAll('.navbar__line');
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu-active')
    for (let line of lines) {
        line.classList.toggle('navbar__line-active');
    }

}