(() => {
    'use strict'

    let toggleMunu = document.querySelector('.toggleMenu');

    toggleMunu.addEventListener('click', (e) => {
        e.preventDefault();
        let menu = document.querySelector('.header__menu');

        menu.classList.toggle('active');
    });
    
    
})();