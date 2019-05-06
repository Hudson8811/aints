 $(function() {
$('.button--up').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});
$(".numbox").mask("+7 (999) 999-99-99");

(function($) {
$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});
})(jQuery);


jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});


$(function() {

    $('.main-window .content-block .filters__block .tabs .tabs__content .filter__body.type--2  ul li').on('click', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
        
    });

});


$('.tabs_block .tabs_lincks .tab_link').click(function() {
$('.tabs_block .tabs_lincks .tab_link').removeClass('active');
$(this).addClass('active');
$('.tabs_block .tabs_items .tab_item').removeClass('active')
.eq($(this).index()).addClass('active');
return false;
});




$(function() {
$('#number').selectmenu();
    });

$(document).ready(function() {
  $('.select').niceSelect();
});
