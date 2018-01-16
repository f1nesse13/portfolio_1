// window.onload = alert("Sorry for the interuption but this website is best viewed on Chrome with a monitor of 900px or more. Thanks for visiting!!")
// clock refresh
function updateClock() {
    $('.time').load('/ .time' )
    setTimeout(updateClock, 1000);
}
// Contact clock refresh
updateClock();

// Progress Bars for skill list
progressBars = (el, val) => {
    let element = document.getElementById(el + "-prog")
    let element2 = document.getElementById(el + "-percentage")
    let width = 1;
    let percent = 1;
    let frame = () => {
        if(width >= val){  
            clearInterval(interval)
        }
        else {
            percent++
            width++
            element2.innerHTML = percent + "%"; 
            element.style.width = width + '%';
        }
    }
    let interval = setInterval(frame, 30)
}
// Called on each element
progressBars('html', 90);
progressBars('css', 90);
progressBars('javascript', 85);
progressBars('node', 75);
progressBars('react', 70);
progressBars('mongo', 80);
progressBars('wordpress', 60);
progressBars('python', 70);

// If scrolled more than 100px than fade in arrow else fade out
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {      
        $('#return-to-top').fadeIn(200);    
    } else {
        $('#return-to-top').fadeOut(200); 
    }
});
//Scroll to top if arrow clicked
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 500);
});



