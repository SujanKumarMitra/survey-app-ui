/**
* Template Name: Appland - v2.2.0
* Template URL: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function ($) {
    "use strict";

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        var scrolltoOffset = $('#header').outerHeight() - 1;
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);