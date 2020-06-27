var header    = document.querySelector(".header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();

let navItem = document.querySelector('.navigation__item');

navItem.addEventListener('scroll', (e) => {

})