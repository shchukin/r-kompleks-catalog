(function($) {

    /* Получаем координату, обязательно после того как шапка уменьшилась */
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const headerHeight = parseInt(style.getPropertyValue('--header-height'), 10);
    const headerCollapsedHeight = parseInt(style.getPropertyValue('--header-collapsed-height'), 10);
    const pageScrolledCoordinate = window.matchMedia('(min-width: 740px)').matches ? headerHeight - headerCollapsedHeight : 10;

    const $html = $('html');

    $(window).on('scroll', $.throttle(50, isPageScrolled));
    $(document).ready(isPageScrolled);

    function isPageScrolled() {
        if( $(window).scrollTop() > pageScrolledCoordinate ) {
            $html.addClass('page-scrolled');
        } else {
            $html.removeClass('page-scrolled');
        }
    }

})(jQuery);
