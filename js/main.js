$( document ).ready(function() {
    // arrordeon on main page
    $(".accordeon > li > a").click(function (e) {
        e.preventDefault();

        var menu = $(this).closest('.accordeon');

        if (false == $(this).next().is(':visible')) {
            menu.find('li').removeClass('slide active');
            menu.find('ul').slideUp();
        }

        $(this).next().slideToggle();
        $(this).parent().toggleClass('slide');
    });
    // open small menu
    $("#menu").click(function (e) {
        e.preventDefault();
        $(".nav_list").toggleClass('d-flex');

    });
    // slider on main page
    $('.main_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fal fa-angle-right"></i></div>',
    });
    /// star wars in main
    $('.starrr').starrr({
        change: function(e, value){
            if (value) {
                $('.your-choice-was').show();
                $('.choice').text(value);
            } else {
                $('.your-choice-was').hide();
            }
        }
    });
});