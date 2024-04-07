(function ($) {

    function init() {


        /* Навигация (инициализируется первой) */

        const swiperNavigation = new Swiper('.project__navigation .swiper', {
            spaceBetween: 17,
            slidesPerView: 5,
            slidesPerGroup: 5,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            /* Из документации: */
            freeMode: true,
            watchSlidesProgress: true,
        });


        /* Сцена (инициализируется после) */

        const swiperStage = new Swiper('.project__stage .swiper', {
            spaceBetween: 10,
            mousewheel: {
                forceToAxis: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: swiperNavigation, // связь с навигацией
            },
        });

    }

    $(document).ready(init);
    $(window).on('resize', init);


})(jQuery);
