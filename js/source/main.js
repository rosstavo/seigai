( function($) {

    $window = $(window);

    $('*[data-type="parallax"]').each(function(){

        var $bgobj = $(this);

        $(window).on( 'scroll resize', $.throttle(100, function() {

            var yPos = ($window.scrollTop() + $window.height()) / $(document).height() * 100;
            var coords = '50% '+ yPos + '%';

            $bgobj.css({ backgroundPosition: coords });

            // console.log(coords);

        } ) );
    });

} )(jQuery);