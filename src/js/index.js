import 'slick-slider'
import Affix from "./modules/affix";

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
    new Affix('.page_header').toggleAffix();

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
