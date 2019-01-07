/**
 * Copyright by Alexander Afanasyev
 * E-mail: blackbirdeagle@mail.ru
 * Skype: al_sidorenko1
 * */

function isEmailValid(emailAdress) {
    var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
    return EMAIL_REGEXP.test(emailAdress)
}

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$(document).ready(function() {
    var owl = $("#slider__kv");
    owl.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 4
            }
        },
        margin: 32,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl4 = $("#slider__new");
    owl4.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 4
            }
        },
        margin: 32,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl5 = $("#slider__akcii");
    owl5.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 4
            }
        },
        margin: 32,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl8 = $("#slider__newstroy");
    owl8.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 4
            }
        },
        margin: 32,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl1 = $("#step__slider");
    owl1.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['', ''],
    });

    $('#pagin1').click(function(){
        owl1.trigger('to.owl.carousel', [0, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin2').click(function(){
        owl1.trigger('to.owl.carousel', [1, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin3').click(function(){
        owl1.trigger('to.owl.carousel', [2, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin4').click(function(){
        owl1.trigger('to.owl.carousel', [3, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin5').click(function(){
        owl1.trigger('to.owl.carousel', [4, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    owl1.on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.pagin__slider a').removeClass('active');
            $('#pagin1').addClass('active');
        } else if (in_owl == 1) {
            $('.pagin__slider a').removeClass('active');
            $('#pagin2').addClass('active');
        } else if(in_owl == 2){
            $('.pagin__slider a').removeClass('active');
            $('#pagin3').addClass('active');
        }else if(in_owl == 3){
            $('.pagin__slider a').removeClass('active');
            $('#pagin4').addClass('active');
        }else if(in_owl == 4){
            $('.pagin__slider a').removeClass('active');
            $('#pagin5').addClass('active');
        }
    });

    var owl6 = $("#step__slider1");
    owl6.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['', ''],
    });

    $('#pagin11').click(function(){
        owl6.trigger('to.owl.carousel', [0, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin22').click(function(){
        owl6.trigger('to.owl.carousel', [1, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin33').click(function(){
        owl6.trigger('to.owl.carousel', [2, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin44').click(function(){
        owl6.trigger('to.owl.carousel', [3, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pagin55').click(function(){
        owl6.trigger('to.owl.carousel', [4, 300]);
        $('.pagin__slider a').removeClass('active');
        $(this).addClass('active');
    });

    owl6.on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.pagin__slider a').removeClass('active');
            $('#pagin11').addClass('active');
        } else if (in_owl == 1) {
            $('.pagin__slider a').removeClass('active');
            $('#pagin22').addClass('active');
        } else if(in_owl == 2){
            $('.pagin__slider a').removeClass('active');
            $('#pagin33').addClass('active');
        }else if(in_owl == 3){
            $('.pagin__slider a').removeClass('active');
            $('#pagin44').addClass('active');
        }else if(in_owl == 4){
            $('.pagin__slider a').removeClass('active');
            $('#pagin55').addClass('active');
        }
    });

    var owl2 = $("#slider__rieltor");
    owl2.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 3
            }
        },
        margin: 160,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });

    var owl3 = $("#slider__rielt__cont");
    owl3.owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['', ''],
    });

    $('#slider__rieltor .owl-nav .owl-prev').click(function(){
        owl3.trigger('prev.owl.carousel');
    });

    $('#slider__rieltor .owl-nav .owl-next').click(function(){
        owl3.trigger('next.owl.carousel');
    });

    var owl7 = $("#partners__slider");
    owl7.owlCarousel({
        responsive: {
            0: {
                items: 2
            },
            570: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 5
            }
        },
        margin: 130,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" />', '<img src = "images/next1.png" />'],
    });
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 40;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){
        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });
    }
}

addEventListener("keydown", keyExit);

$('.faq__list__item a').click(function(){
    var faq = $(this).attr('faq');
    $('.faq__list__item p').hide();
    $('#' + faq).show();
});

$('.show__menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -290}, 300);
});

$('.send__call').click(function(){
    var name = $('.usagr-pp input[name = "name"]').val();
    var phone = $('.usagr-pp input[name = "phone"]').val();
    var flag = 0;

    $('.usagr-pp input[type = "text"]').css({"border":"1px solid #e9e9ea"});

    if(name == ""){
        $('.usagr-pp input[name = "name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.usagr-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post("/send.php", {NAME: name, PHONE: phone, EVENT: "FEED"}, function(data){
            alert("Ваша заявка отправлена! В ближайшее время мы на нее ответим.");

            var popup = $('.popup:visible');
            popup.fadeOut(200, function(){
                $('.overlay').fadeOut(200);
            });

            $('.usagr-pp input[name = "name"]').val("");
            $('.usagr-pp input[name = "phone"]').val("");
        });
    }
});

$('.send__quest__rielt').click(function(){
    var name = $('.rieltor-pp input[name = "name"]').val();
    var phone = $('.rieltor-pp input[name = "phone"]').val();
    var email = $('.rieltor-pp input[name = "email"]').val();
    var quest = $('.rieltor-pp textarea').val();
    var flag = 0;

    $('.rieltor-pp input[type = "text"]').css({"border":"1px solid #e9e9ea"});
    $('.rieltor-pp textarea').css({"border":"1px solid #e9e9ea"});

    if(name == ""){
        $('.rieltor-pp input[name = "name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.rieltor-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(email != "" && !isEmailValid(email)){
        $('.rieltor-pp input[name = "email"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(quest == ""){
        $('.rieltor-pp textarea').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post("/send.php", {NAME: name, PHONE: phone, EVENT: "R_QUEST"}, function(data){
            alert("Ваша заявка отправлена! В ближайшее время мы на нее ответим.");

            var popup = $('.popup:visible');
            popup.fadeOut(200, function(){
                $('.overlay').fadeOut(200);
            });

            $('.rieltor-pp input[name = "name"]').val("");
            $('.rieltor-pp input[name = "phone"]').val("");
            $('.rieltor-pp input[name = "email"]').val("");
            $('.rieltor-pp textarea').val("");
        });
    }
});

$('.send__call__consult').click(function(){
    var name = $('.consult-pp input[name = "name"]').val();
    var phone = $('.consult-pp input[name = "phone"]').val();
    var flag = 0;

    $('.consult-pp input[type = "text"]').css({"border":"1px solid #e9e9ea"});

    if(name == ""){
        $('.consult-pp input[name = "name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.consult-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post("/send.php", {NAME: name, PHONE: phone, EVENT: "CONSULT"}, function(data){
            alert("Ваша заявка отправлена! В ближайшее время мы на нее ответим.");

            var popup = $('.popup:visible');
            popup.fadeOut(200, function(){
                $('.overlay').fadeOut(200);
            });

            $('.consult-pp input[name = "name"]').val("");
            $('.consult-pp input[name = "phone"]').val("");
        });
    }
});

$('.send__quest__direktor').click(function(){
    var name = $('.direktor-pp input[name = "name"]').val();
    var phone = $('.direktor-pp input[name = "phone"]').val();
    var email = $('.direktor-pp input[name = "email"]').val();
    var quest = $('.direktor-pp textarea').val();
    var flag = 0;

    $('.direktor-pp input[type = "text"]').css({"border":"1px solid #e9e9ea"});
    $('.direktor-pp textarea').css({"border":"1px solid #e9e9ea"});

    if(name == ""){
        $('.direktor-pp input[name = "name"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(phone == ""){
        $('.direktor-pp input[name = "phone"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(email != "" && !isEmailValid(email)){
        $('.direktor-pp input[name = "email"]').css({"border":"1px solid red"});
        flag = 1;
    }

    if(quest == ""){
        $('.direktor-pp textarea').css({"border":"1px solid red"});
        flag = 1;
    }

    if(flag == 0){
        $.post("/send.php", {NAME: name, PHONE: phone, EVENT: "DIREKTOR"}, function(data){
            alert("Ваша заявка отправлена! В ближайшее время мы на нее ответим.");

            var popup = $('.popup:visible');
            popup.fadeOut(200, function(){
                $('.overlay').fadeOut(200);
            });

            $('.direktor-pp input[name = "name"]').val("");
            $('.direktor-pp input[name = "phone"]').val("");
            $('.direktor-pp input[name = "email"]').val("");
            $('.direktor-pp textarea').val("");
        });
    }
});
