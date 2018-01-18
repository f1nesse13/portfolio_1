// window.onload = alert("Sorry for the interuption but this website is best viewed on Chrome with a monitor of 900px or more. Thanks for visiting!!")
'use strict'
$(document).ready(function() {

// Progress Bars for skill list
let progressBars = (el, val) => {
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
// Calling each technology and the width variable on each element

progressBars('html', 90);
progressBars('css', 90);
progressBars('javascript', 85);
progressBars('node', 75);
progressBars('react', 70);
progressBars('mongo', 80);
progressBars('wordpress', 60);
progressBars('python', 70);
});

    