/* BURGER MENU */
const burguerMenu = document.querySelector('.navigation__burguer__menu');
const closeIcon = document.querySelector('.navigation__icon__close');
const openIcon = document.querySelector('.navigation__icon__open');
const navigationMenu = document.querySelector('.navigation__menu');

/* OPEN AND CLOSE BURGUER MENU */
burguerMenu.addEventListener('click', () => {
    if (closeIcon.classList.contains('hide')) {
        navigationMenu.classList.remove('hide');
        closeIcon.classList.remove('hide');
        openIcon.classList.add('hide');
    } else {
        closeIcon.classList.add('hide');
        navigationMenu.classList.add('hide');
        openIcon.classList.remove('hide');
    }
})

/* CLOSE MENU AFTER CLICK SOME SECTION */
const navigationLink = document.querySelectorAll('.navigation__menu__link');
navigationLink.forEach((n) => {
    n.addEventListener('click', () => {
        closeIcon.classList.add('hide');
        navigationMenu.classList.add('hide');
        openIcon.classList.remove('hide');
    })
})