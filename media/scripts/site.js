$(function(){

    // Sticky Nav

    var offset;
    var $header = $('header');
    var $filterLink = $('.filter-nav a');
    var $resourcesList = $('.resources-list');

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


});