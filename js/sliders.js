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
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'slider__dot--active'
    },
})