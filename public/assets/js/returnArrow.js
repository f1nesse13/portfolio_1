// If scrolled more than 100px than fade in arrow else fade out
/* global $ */
$(document).ready(function() {
// ===== Scroll to Top ==== 
// Checks if you scroll 100px then it will show the arrow else it will stay hidden
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) { 
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200);   
    }
});
// When the arrows clicked it scrolls to the top
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0               
    }, 500);
});
});