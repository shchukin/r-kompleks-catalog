(function ($) {


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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    /* Модалка */

    $('.project__stage').magnificPopup({
        delegate: '.preview--stage',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1],
            tCounter: '<span class="mfp-counter-index">%curr%/%total%</span>'
        }

    });


})(jQuery);
