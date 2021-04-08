import 'slick-slider'

function toggleMobileMenu(body, header){
    header.find('.toggle_menu').on('click', function () {
        header.toggleClass('mobile-active')
        body.toggleClass('mobile-menu-active')
    });
}

$(document).ready(function() {
    let $body = $('body');
    let $window = $(window);
    let $header = $('.page_header');

    toggleMobileMenu($body, $header);

    $('.intro').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.intro-nav'
    });
    $('.intro-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.intro',
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });
});
