$(function () {
    $.fn.flex = function() {
        this.css({'display':'flex'});
    };
    var $showMoreOfferbtn = $('.item-show-more-offers');
    var $catalogueMnu=$('.catalogue-nav');



    $('.catalogue-mnu').delegate('a','click',function() {
        $(this).parent().siblings().find('ul').fadeOut(300);
        $(this).next('ul').stop(true, false, true).fadeToggle(300);
        return false;
    });


    //show catalogue menu
    $catalogueMnu.on('click',function () {
        $(this).hasClass('catalogue-nav--active') ? $(this).removeClass('catalogue-nav--active') : $(this).addClass('catalogue-nav--active');
        $('.catalogue-mnu-wrapper').slideToggle('100').flex();
    });

    //show more on product item
    $showMoreOfferbtn.on('click', function (e) {

        $(this).parent().siblings('.more-offers').slideToggle('slow');
        $(this).html($(this).html() == 'закрыть другие предложения' ? 'показать другие предложения' : 'закрыть другие предложения');
        return false;
    });

    $('.filter_title').on('click',function () {
       $('.filter_set').is(':hidden') ? $('.filter_set').slideDown(300) : $('.filter_set').slideUp(300);
    });
});