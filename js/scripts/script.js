// 

let toggleMunu = document.querySelector('.toggleMenu'),
    menuLinks = document.querySelectorAll('.navigation__item');

toggleMunu.addEventListener('click', menu);
toggleMunu.addEventListener('click', (e) => {
    e.preventDefault();
});
menuLinks.forEach(link => link.addEventListener('click', menu));

function menu(e) {
    let menu = document.querySelector('.header__menu'),
        body = document.querySelector('body');

    menu.classList.toggle('header__menu--visible');
    menu.classList.toggle('header__menu--hidden');

    body.classList.toggle('overflow-hidden');
}




