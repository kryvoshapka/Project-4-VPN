$(window).ready(function() {

   $('.burger').click(function() {
        $(this).toggleClass('fa-close fa-bars');
        $('nav').toggleClass('active');
   });

   $('nav a').click(function() {

        if($(window).width() < 800) {
            $('nav').toggleClass('active');
            $('.burger').toggleClass('fa-close fa-bars');
        }

        var target = $(this).attr('nav a');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);

        return false;
   });


    var defaultCounterValue = 1;
    $('.counter-value').text(defaultCounterValue);
    $('.counter input').val(defaultCounterValue);

    $('.counter-plus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        current++;
        $(this).siblings('.counter-value').text(current);
        $(this).siblings('input').val(current);
    });

    $('.counter-minus').click(function() {
        var current = parseInt($(this).siblings('.counter-value').text());
        if(current > 1) {
            current--;
            $(this).siblings('.counter-value').text(current);
            $(this).siblings('input').val(current);
        }
    });


    $(".buy").click(function () {
        $(".modal").fadeIn(400).css("display","flex");
    });

    $(".modal").click(function (event) {
        var clickedElemnt = event.target;
        if(!$(clickedElemnt).closest(".modal-inner").length) {
            $(".modal").fadeOut(400);
        }
        if($(clickedElemnt).hasClass("close-modal")) {
            $('.modal').fadeOut(400);
        }
    });

});
