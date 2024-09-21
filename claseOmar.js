$(document).ready(function(){
    $('.carousel-item img').hover(function(){
        $(this).fadeTo("slow", 0.7);
    }, function(){
        $(this).fadeTo("slow", 1);
    });
});

$(document).ready(function(){
    $('.carousel-caption').hide().slideDown(5000);
});

/*$(document).ready(function(){
    $('.carousel-caption').hide().slideDown(1000);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }
    });

    $('.carousel-item img').hover(function(){
        $(this).animate({ opacity: 0.7 }, 300);
    }, function(){
        $(this).animate({ opacity: 1 }, 300);
    });

    $('.btn').click(function() {
        $(this).effect("bounce", { times: 3 }, 300);
    });

    $('footer').hide().fadeIn(2000);
});*/

$(document).ready(function(){
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            $('.navbar').slideUp(300);
        } else {
            $('.navbar').slideDown(300);
        }
        lastScrollTop = currentScrollTop;
    });


    $('footer').hide().fadeIn(2000);
    $('.carousel-item img').hover(function(){
        $(this).animate({ opacity: 0.7 }, 300);
    }, function(){
        $(this).animate({ opacity: 1 }, 300);
    });
});

