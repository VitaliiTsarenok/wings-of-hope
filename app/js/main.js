$(document).ready(function(){

    $('.menu').on('click',function(){
        $('.nav-list').toggleClass('menu-open')
    });
    
    $('.nav a').on('click',function(){
        $('.nav-list').removeClass('menu-open');      
    });

    var location = window.location.href;
    var cur_url = location.split('/').pop();

    $('.nav-list a').each(function () {
        var link = $(this).attr('href');
        
        if (cur_url == link) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
    
 
    $(window).scroll(function(){
        var ScrollPos = $(window).scrollTop()/8 +40;
        $(window).width() > 767 ? $('.baner').css('background-position','50%'+''+ ScrollPos+'%') : $('.baner').css('background-position','center');
    });
});




