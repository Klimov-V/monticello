var header    = document.querySelector(".header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();

let navLinks = document.querySelector('.navigation__list');


window.addEventListener('scroll', (e) => {
    let lastActive = document.querySelectorAll(".navigation__item--active");
    
    lastActive[0] && lastActive[0].classList.remove("navigation__item--active");

    let i, titles = document.getElementsByTagName('h2');    

    for (i = 0; i < titles.length; i++) {
        let title = titles[i];
        if (title.getBoundingClientRect().top > 1) break;
    }

    if (--i >= 0) {
        let link = titles[i].firstElementChild && titles[i].firstElementChild.getAttribute("href"),
            currentActive = document.querySelector('.navigation__item[href="' + link + '"]');

        link && currentActive && currentActive.classList.add("navigation__item--active");
    }
})

