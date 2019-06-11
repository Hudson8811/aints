$('.header .btn-login').click(function(){
  $('#login_form').arcticmodal();
 });
 
 $('.modal--form .btn-login').click(function(){
  $('#login_form').arcticmodal();
  $('#regisry_form').arcticmodal("close");
 });

$('.btn-regisrty').click(function(){
  $('#regisry_form').arcticmodal();
  $('#login_form').arcticmodal("close");
 });
 
 $('.modal--form .forget_pass').click(function(){
  $('#login_form').arcticmodal("close");
  $('#reset__pass').arcticmodal();
 });
 
  $('.rating__item-info a').click(function(){
  $('#about_premium').arcticmodal();
 });

$('.ref-btn').click(function(){
  $('#ref_form').arcticmodal();

 });
 
$('#ref_form form button').click(function(){
  $('#ref_form').arcticmodal("close");
   $('#ref-thanks').arcticmodal();

 });
 $('.inside__page .contact--form .button').click(function(){
  $('#quest-thanks').arcticmodal();

 });

$('.btn_end-reg').click(function(){
  $('#regisry_form').arcticmodal("close");
  $('#regisry_end').arcticmodal();
 });
$('.btn-close').click(function(){

  $('#regisry_end').arcticmodal("close");
 });
$(document).ready(function() {
  $('.select').niceSelect();
})

jQuery(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".popup"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.hide(); // скрываем его
    
     $(".zinz-big").removeClass("zinz-big");
     $(".shadow-container").hide();

    }
  });
});

$(".numbox").mask("+7 (999) 999-99-99");



$(function() {
$('.burger-menu').click(function() {

     $(this).toggleClass("zinz-big");
     $(".header .row .logo").toggleClass("zinz-big");
     
     $(".shadow-container").slideToggle();
     $(".header .row .mobile-menu").slideToggle();

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

$('.under-header .container .right_side .premium-btn').change(function() {
    $(".js-accent").toggleClass("active");

});





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

  $(this).prev().toggleClass("zinz-big");
    $(this).parent().toggleClass("active");
     $(".shadow-container").slideToggle();
  $(this).next().slideToggle();

  $(this).toggleClass("zinz-big");
  


 
});




$('.input-block ul li').click(function() {
$(this).parent().prev().prev().val($(this).text());

$(this).parent().parent().toggleClass('active');
});

$('.input-block.dr-menu').click (function(){
  
  $(this).children().next().slideToggle();
 
});