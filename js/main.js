$(window).on('scroll',function(){
    if($('.navbar').offset().top > 50){
        $('.navbar-fixed-top').addClass('navbar-custom');
    } else {
        $('.navbar-fixed-top').removeClass('navbar-custom');
    }
});

$(function(){
    $('.scroll a').bind('click', function(e){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
});
$(function(){
    $('.dugme').bind('click', function(e){
        $('html, body').stop().animate({
            scrollTop: $('#kontakt').offset().top
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
});




