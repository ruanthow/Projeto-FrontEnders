firstSection = document.querySelector(".productAndInfo");



let effectSliderShowIsTrue = false; 

firstSection.style.marginTop = '-500px';
firstSection.style.opacity ='0%'
body = document.querySelector("body");

setInterval(()=>{
    firstSection.style.marginTop = '0px';
    firstSection.style.transition = 'all 1.5s';
    firstSection.style.opacity ='100%'
    firstSection.style.transition = 'all 1.5s';

})



