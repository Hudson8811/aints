$('.header .btn-login').click(function(){
    $('#login_form').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});

$('.modal--form .btn-login').click(function(){
    $('#login_form').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
    $('#regisry_form').arcticmodal("close");
});

$('.btn-regisrty').click(function(){
    $('#regisry_form').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
    $('#login_form').arcticmodal("close");
});

$('.modal--form .forget_pass').click(function(){
    $('#login_form').arcticmodal("close");
    $('#reset__pass').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});

$('.rating__item-info a').click(function(){
    $('#about_premium').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});

$('.ref-btn').click(function(){
    $('#ref_form').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });

});

$('#ref_form form button').click(function(){
    $('#ref_form').arcticmodal("close");
    $('#ref-thanks').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });

});
$('.inside__page .contact--form .button').click(function(){
    $('#quest-thanks').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });

});

$('.btn_end-reg').click(function(){
    $('#regisry_form').arcticmodal("close");
    $('#regisry_end').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});

$('.matches .item .btn-graph').click(function(){

    $('#mobile-graphs').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});

$('.all-info-btn-mobile').click(function(){

    $('#inform_mobile').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });



});

$('.tours-icon').click(function(){

    $('#tournirs').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});


$('.players-icon').click(function(){

    $('#players-modal').arcticmodal({
        beforeOpen: function(data, el) {
            $("#wrapper").toggleClass("blur");
        },
        afterClose: function(data, el) {
            $("#wrapper").toggleClass("blur");
        }
    });
});


$(document).ready(function() {
    $('.select').niceSelect();
})







$(".numbox").mask("+7 (999) 999-99-99");

$(function() {
    $('.text__btn').click(function() {

        $(this).toggleClass("active");
        $(".inside__page .about_project .rating--block").toggleClass("active");
        $(this).parent().find("p").children(".on_desktop").slideToggle();






    });
});

$(function() {
    $('.burger-menu').click(function() {

        $(this).toggleClass("zinz-big");
        $(".header .row .logo").toggleClass("zinz-big");

        $(".shadow-container").toggle();
        $(".header .row .mobile-menu").toggle(300);
        $(".header .row nav.drop-down").hide();


    });
});
$(function() {
    $('.shadow-container').click(function() {

        $(this).hide();
        $(".blur").removeClass("blur");
        $(".zinz-big").removeClass("zinz-big");
        $(".header .mobile-menu").hide();
        $(".header .row nav.drop-down").hide();
        $(".header .row .right_side.autorized .profile-block").removeClass("active");
        $(".drop-games").hide();
        $(".header .row .right_side.autorized .profile-block .left_info").removeClass("active");

    });
});

/*
$(function() {
$('.under-header .container .left_side div.link img').click(function() {
    $(this).parent().toggleClass("zinz-big");
     $(this).parent().children(".drop-games").slideToggle();
     $(".shadow-container").toggle();
     

});
});
*/
$(function() {
    $('.under-header .container .right_side .icons_block > div .img').click(function() {
        $("main,.header,.under-header .container .left_side .link,.under-header .container .right_side .premium-btn,.under-header .container .right_side .current-filters,.under-header .container .right_side .icons_block > div,.footer").toggleClass("blur");
        $(this).parent().removeClass("blur");
        $(this).parent().toggleClass("zinz-big");
        $(this).parent().children(".drop-games").slideToggle(200);
        $(".shadow-container").toggle();


    });
});


$(function() {
    $('.drop-games .item').click(function() {
        $(this).toggleClass("active");



    });
});



$( function() {
    $( ".accordion" ).accordion({
        heightStyle: "content",
        collapsible: true,
        active: false,
    });
} );

$( function() {
    $( ".accordion2" ).accordion({
        heightStyle: "content",
        collapsible: true,

    });
} );


$('.top-banner .btn-close').click(function() {
    $(".top-banner").hide(200);
    $(".shadow-container").hide(200);
});

$('.matches .item .top_block .btn-more').click(function() {
    $(this).toggleClass("active");
    $(this).parent().next().toggleClass("hideI");
});

$('.awi-icon').click(function() {

    $(".mobile--filters").slideToggle(300);
    $(".shadow-container").show(200);
});

$('.inside__page .fixed-btn').click(function() {

    $(".fixed_block").addClass("active");
    $(".inside__page .tarifs-row .right_side .payment-block").addClass("active");
    $(".shadow-wrap").show();



});

$('.under-header .container .right_side .premium-btn').change(function() {
    $(".js-accent").toggleClass("active");

});



$('.top-banner .item').click(function() {

    $(this)
        .addClass('active').siblings().removeClass('active')




});

(function($) {
    $(function() {

        $('div.tabs__header').on('click', '.tabs__caption:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.rating-row').find('div.item ').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


$('.slider').owlCarousel({
    loop:true,
    margin:0,
    smartSpeed:125,
    items:1,
    nav:false,
    navText:false,
    dots:true,
    autoplay:false,
});





$('.header .row .right_side.autorized .profile-block .avatar').click (function(){
    $("main,.header .main-menu,.logo, .under-header .container .left_side .link,.under-header .container .right_side .premium-btn,.under-header .container .right_side .current-filters,.under-header .container .right_side .icons_block > div,.footer,.burger-menu").toggleClass("blur");
    $(this).prev().toggleClass("zinz-big");
    $(this).parent().toggleClass("active");
    $(".shadow-container").toggle();
    $(this).next().slideToggle();
    $(".header .mobile-menu").hide();

    $(".header .row .right_side.autorized .profile-block .left_info").toggleClass("active");




    $(this).toggleClass("zinz-big");




});




$('.input-block ul.hide li').click(function() {
    /*
  $(this).parent().prev().prev().val($(this).text());
  $(this).parent().prev().prev().prev().text(" ");

  */
    $(this).closest('.input-block').find('li.current_value').removeClass('active').eq($(this).index()).addClass('active');
    $(".inf").removeClass("active");
    $(this).parent().prev().children().children().remove(".inf li");
    $(this).parent().prev().children().addClass("active");
    $(this).clone().appendTo(".inf.active");
    $(this).parent().parent().find("label").addClass("active");
    $(this).parent().parent().toggleClass("fully");
    $(this).parent().slideToggle();
    $(this).parent().parent().parent().parent().find(".all-value").addClass("active");
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest(".item").find("label input").prop('checked', true);
    $(this).closest(".item").addClass("active");
    $(this).parent().parent().toggleClass("active");
    $(this).parent().parent().parent().find("label").addClass("active");


});

$(function() {
    $('.shadow-container-input-block').click(function() {

        $(this).hide();
        $(this).parent().removeClass("active");
        $(this).closest(".input-block").find(".filter-ul").hide(200);
        $(this).closest(".input-block").find(".filter-ul").children().removeClass("active");
        $(this).closest(".item").find("label input").prop('checked', false);
        $(this).closest(".item").removeClass("active");


    });
});

$('.input-block.dr-menu .zt200').click (function(){


    $(this).children().children().remove();


    $(this).parent().find("label").removeClass("active");
    $(this).parent().find("ul.hide").slideToggle();



    if ($(this).parent().hasClass("active")) {
        $(this).closest(".item").find("label input").prop('checked', false);
        $(this).parent().parent().find("label").removeClass("active");
        $(this).closest(".item").removeClass("active");
        $(this).parent().removeClass("active");
        $(this).parent().parent().parent().find(".all-value").removeClass("active");
    } else {
        $(this).parent().addClass("active");
    }

});




$('.inside__page .tarifs-row .opportunities .table .item label').change (function(){
    if ($(this).parent().parent().hasClass("active")) {
        $(this).closest(".item").find("label input").prop('checked', false);
        $(this).closest(".item").find("label.active").removeClass("active");
        $(this).closest(".item").find(".inf li").remove();
        $(this).closest(".item").find(".inf.active").removeClass("active");



    };
    $(this).parent().parent().toggleClass("active");






});

function windowSize(){
    if ($(window).width() < '1025'){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".popup"); // тут указываем ID элемента

            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                $(".inside__page .tarifs-row .right_side .payment-block").removeClass("active");
                $(".fixed_block").removeClass("active");
                $(".shadow-wrap").hide();

            }
        });
    } else {
        return
    }

    if ($(window).width() < '1025'){
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $(".popup-2"); // тут указываем ID элемента

            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам

                $(".mobile-menu-inside-page").hide(200);

            }
        });
    } else {
        return
    }

    $('.matches .item .top_block .right_side .icons-block .share').click(function(){
        $('#share_modal').arcticmodal();
    });

    $('.input-block.dr-menu .zt200').click (function(){
        $(this).closest(".input-block").find(".shadow-container-input-block").show(200);
    });


    $('.side-menu nav').click (function(){
        $(".mobile-menu-inside-page").show(200);
    });

    $(function() {
        $('.shadow-container').click(function() {
            $(".mobile--filters").hide(300);


        });
    });



}

$(window).resize(windowSize); // при изменении размеров
// или "два-в-одном", вместо двух последних строк:
$(window).on('load resize',windowSize);



var swipercustom = undefined;
function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 769 && swipercustom == undefined) {
        $('.matches .swiper-container').each(function(){
            swipercustom = new Swiper(this, {
                autoHeight: true,
                pagination: {
                    el: '.swiper-pagination',

                },

            })
        });
    } else if (screenWidth > 768 && swipercustom != undefined) {
        $('.matches .swiper-container').each(function(){
            this.swiper.destroy();
        })
        swipercustom = undefined;
        jQuery('.matches .swiper-wrapper').removeAttr('style');
        jQuery('.matches .swiper-slide').removeAttr('style');
    }
}
initSwiper();
$(window).on('resize', function(){
    initSwiper();
});





$('.banners-mobile .swiper-slide1').click (function(){
    $(this).removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("swiper-slide-active")
        .next().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("next")
        .next().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("nextnext");
});

$('.banners-mobile .swiper-slide2').click (function(){
    $(this).removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("swiper-slide-active")
        .prev().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("prev")
        .next().next().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("next");
});

$('.banners-mobile .swiper-slide3').click (function(){
    $(this).removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("swiper-slide-active")
        .prev().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("prev")
        .prev().removeClass("swiper-slide-active").removeClass("next").removeClass("nextnext").removeClass("prev").removeClass("prevprev").addClass("prevprev");
});


$('.icon-Arrow_Right:nth-child(1)').click (function(){
    prevMobileSlider();
});


$('.icon-Arrow_Right:nth-child(2)').click (function(){
    nextMobileSlider();
});

jQuery('.banners-mobile').swipe({
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'up') {
            nextMobileSlider();
        }
        if (direction == 'down') {
            prevMobileSlider();
        }
    }
});
function prevMobileSlider() {
    if ($(".banners-mobile").find(".swiper-slide-active").is(':not(:first-child)')){
        $(".banners-mobile").find(".next").removeClass("next");
        $(".banners-mobile").find(".nextnext").removeClass("nextnext");
        $(".banners-mobile").find(".prev").removeClass("prev");
        $(".banners-mobile").find(".prevprev").removeClass("prevprev");

        $(".banners-mobile").find(".swiper-slide-active").removeClass("swiper-slide-active")
            .prev().addClass("swiper-slide-active")
            .prev().addClass("prev")
            .prev().addClass("prevprev");
        $(".banners-mobile").find(".swiper-slide-active")
            .next().addClass("next")
            .next().addClass("nextnext");
    }
}

function nextMobileSlider() {
    if ($(".banners-mobile").find(".swiper-slide-active").is(':not(:last-child)')){
        $(".banners-mobile").find(".next").removeClass("next");
        $(".banners-mobile").find(".nextnext").removeClass("nextnext");
        $(".banners-mobile").find(".prev").removeClass("prev");
        $(".banners-mobile").find(".prevprev").removeClass("prevprev");

        $(".banners-mobile").find(".swiper-slide-active").removeClass("swiper-slide-active")
            .next().addClass("swiper-slide-active")
            .next().addClass("next")
            .next().addClass("nextnext");
        $(".banners-mobile").find(".swiper-slide-active")
            .prev().addClass("prev")
            .prev().addClass("prevprev");
    }
}