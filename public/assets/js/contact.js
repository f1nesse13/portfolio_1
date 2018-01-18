'use strict'
/* global $ */

$(document).ready( () => {
    // btnClicked variable to stop updating the clock when the send message button is clicked
    let btnClicked=false
    $('#send-msg').on('click', function(){
      btnClicked = true  
    }); 
// Contact me clock refresh
function updateClock() {
    if(btnClicked === false) {
    $('.time').load('/contact .time')
    setTimeout(updateClock, 1000);
    }
}
// Contact clock refresh
updateClock();

// Contact alert window - fades and removes element when close is clicked
$(".close").on("click", function() {
    $(".alert-box").fadeOut(300, function(){
        $(".alert-box").remove();
    });
});

});