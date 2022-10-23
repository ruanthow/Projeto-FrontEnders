sectionAreaIntro = document.querySelector(".areaIntro");
sectionAreaIntro2 = document.querySelector(".areaIntro2");

containerContent  = document.querySelector(".containerContent");
containerContent2  = document.querySelector(".containerContent2");
containerContent3  = document.querySelector(".containerContent3");

squareColor1 = document.querySelector(".squareColor1");
squareColor2 = document.querySelector(".squareColor2");
axeColor1 = document.querySelector(".axeColor1");
axeColor2 = document.querySelector(".axeColor2");
runnerColor1 = document.querySelector(".runnerColor1");
runnerColor2 = document.querySelector(".runnerColor2");


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

    axeColor1.style.marginRight = 0;
    axeColor1.style.opacity = '1';
    axeColor1.style.transition = 'all 2s'
    
    axeColor2.style.marginLeft = 0;
    axeColor2.style.opacity = '1';
    axeColor2.style.transition = 'all 2s'

    runnerColor1.style.marginRight = 0;
    runnerColor1.style.opacity = '1';
    runnerColor1.style.transition = 'all 2s'
    
    runnerColor2.style.marginLeft = 0;
    runnerColor2.style.opacity = '1';
    runnerColor2.style.transition = 'all 2s'
    
    effectSliderShowIsTrue = true
    }
    else{

    }
    

}
   
document.addEventListener('scroll', teste)
containerContent.addEventListener('mouseover', effectSliderShow)
containerContent2.addEventListener('mouseover', effectSliderShow)
containerContent3.addEventListener('mouseover', effectSliderShow)

