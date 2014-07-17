$(function(){

    // Sticky Nav

    var offset;
    var $header = $('header');
    var $filterLink = $('.filter-nav a');
    var $resourcesList = $('.resources-list');
    var $sliderLeft = $('.slider-left');
    var $sliderRight = $('.slider-right');

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

    // Resource Page Filters

    $filterLink.on('click', function(e){

        var $this = $(this);

        e.preventDefault();

        var filter = $this.data('filter');

        if ( !$resourcesList.hasClass(filter) ) {

            $resourcesList.addClass(filter);
            $this.addClass('on');

        } else {

            $resourcesList.removeClass(filter);
            $this.removeClass('on');
        }

    });

    // Customer Slider

    var currentSlide = 0;
    var sliderCount = $('.logos ul').length - 1;

    $('.logos ul').eq(0).addClass('show');

    $sliderLeft.on('click', function(e){

        e.preventDefault();

        $(".logos ul:eq("+currentSlide+")").fadeOut(1000, function(){

        $(this).removeClass('show');

        currentSlide -= 1;

        if (currentSlide < 0) {

            currentSlide = sliderCount;

            $(".logos ul:eq("+currentSlide+")").fadeIn(1000, function(){

                $(this).addClass('show');

            });

        } else {

            $(".logos ul:eq("+currentSlide+")").fadeIn(1000, function(){

                $(this).addClass('show');

            });

        }

        });

    });

    $sliderRight.on('click', function(e){

        e.preventDefault();

        $(".logos ul:eq("+currentSlide+")").fadeOut(1000, function(){

        $(this).removeClass('show');

        currentSlide += 1;

        if (currentSlide > sliderCount) {

            currentSlide = 0;

            $(".logos ul:eq("+currentSlide+")").fadeIn(1000, function(){

                $(this).addClass('show');

            });

        } else {

            $(".logos ul:eq("+currentSlide+")").fadeIn(1000, function(){

                $(this).addClass('show');

            });

        }

        });

    });

});