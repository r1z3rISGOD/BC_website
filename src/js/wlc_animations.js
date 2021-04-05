welcomeEdit();
setTimeout(nickSlideUp, 1500);
setTimeout(descSlideUp, 2700);
setTimeout(nickSlideOver, 4000);
setTimeout(descHide, 4000);
setTimeout(openPage, 4500);
setTimeout(headerShow, 5000);


function nickSlideUp() {
    $('.welcome_nick').animate({bottom: '+=100'}, 1200);
}

function descSlideUp(){
    $('.welcome_desc').animate({opacity: '1'}, 1500);
}

function nickSlideOver() {
    $('.welcome_nick').animate({bottom: '46%', right: '48%', fontSize: '42'}, 1200);
}

function descHide(){
    $('.welcome_desc').slideUp();
}

function welcomeEdit() {
   $('.welcome').css({'opacity': '1'});
}

function openPage() {
    $('.welcome').animate({opacity: '0'}, 1000);
    setTimeout (function() {$('.welcome').css({'display': 'none'});}, 700);
 }

function headerShow() {
    $('.header').animate({opacity: '1'}, 2000);
}
