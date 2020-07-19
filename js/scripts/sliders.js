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


var newsSwiper = new Swiper ('.news__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        992: {
            slidesPerView: 3
        }
    },
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