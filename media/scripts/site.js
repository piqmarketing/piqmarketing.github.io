$(function(){

    // Sticky Nav

    var offset;
    var $header = $('header');

    $(window).on('scroll', function(){

        offset = $(window).scrollTop();

        if ( offset > 105 ) {

            $header.addClass('sticky');

        } else {

            if ( $header.hasClass('sticky') ) {

                $header.removeClass('sticky');

            }

        }

    });


});