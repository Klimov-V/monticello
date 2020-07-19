var aboutSwiper = new Swiper ('.about__swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'slider__dot--active'
    },
})

let scrinWidth = window.screen.width,
    slidesValue = scrinWidth < 578 ? 1 : scrinWidth < 992 ? 2 : 3,
    isCentered = scrinWidth < 992 ? false : true;

var newsSwiper = new Swiper ('.news__swiper', {
    loop: true,
    slidesPerView: slidesValue,
    centeredSlides: isCentered,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'slider__dot--active'
    },
    navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
    },
})