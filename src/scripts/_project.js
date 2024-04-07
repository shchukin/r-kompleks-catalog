(function ($) {

    var swiper = new Swiper('.project__navigation .swiper', {
        spaceBetween: 17,
        slidesPerView: 5,
        slidesPerGroup: 5,
        freeMode: true,
        watchSlidesProgress: true,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper2 = new Swiper('.project__stage .swiper', {
        autoHeight: true,
        spaceBetween: 10,
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });



})(jQuery);
