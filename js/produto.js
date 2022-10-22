sectionAreaIntro = document.querySelector(".areaIntro");
sectionAreaIntro2 = document.querySelector(".areaIntro2");
containerContent  = document.querySelector(".containerContent");
squareColor1 = document.querySelector(".squareColor1");
squareColor2 = document.querySelector(".squareColor2");

let effectSliderShowIsTrue = false; 

sectionAreaIntro.style.marginLeft = '-2000px';
sectionAreaIntro2.style.marginRight = '-2000px';

body = document.querySelector("body");

setInterval(()=>{
    sectionAreaIntro.style.marginLeft = '0px';
    sectionAreaIntro.style.transition = 'all 2s';
    sectionAreaIntro2.style.marginRight = '0px';
    sectionAreaIntro2.style.transition = 'all 2.5s';
})

function teste(){
    var a = window.scrollY
    return console.log(a);
}

function effectSliderShow(){
    if(!effectSliderShowIsTrue){
    squareColor1.style.marginRight = 0;
    squareColor1.style.opacity = '1';
    squareColor1.style.transition = 'all 2s'

    squareColor2.style.marginLeft = 0;
    squareColor2.style.opacity = '1';
    squareColor2.style.transition = 'all 2s'
    console.log('a');
    effectSliderShowIsTrue = true
    }
    else{

    }
    

}
   
document.addEventListener('scroll', teste)
containerContent.addEventListener('mouseover', effectSliderShow )

