let totalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 0;

document.querySelector('.banner .slide').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.sliders').clientHeight}px`;

function goPrev(){
    currentSlide--;
    if(currentSlide<0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
};

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slide').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.banner .slide').style.marginLeft = `-${newMargin}px`;
}

//setInterval(goNext, 2000);