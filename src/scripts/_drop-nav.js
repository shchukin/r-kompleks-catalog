(function ($) {

    $('.drop-nav__handler').on('click', function () {
        $(this).parents('.drop-nav').toggleClass('drop-nav--expanded');
    });

})(jQuery);
