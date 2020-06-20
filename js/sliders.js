var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'slider__dot',
        bulletActiveClass: 'slider__dot--active'
    },
})