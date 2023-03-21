let offset = 0;
let buttonPrev = document.getElementById("button-prev");
let buttonNext = document.getElementById("button-next");



buttonPrev.addEventListener("click", moveSlidePrev);
buttonNext.addEventListener("click", moveSlideNext);

function moveSlidePrev() {
    offset = -1;
    slideMovement();
    

}

function moveSlideNext() {
    offset = 1;
    slideMovement();
    

}


const slideMovement= () => {
    let slides = document.querySelectorAll("li");
    let activeSlide = document.getElementById("active-slide");
    let newIndex = [...slides].indexOf(activeSlide) + offset
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } 

    if (newIndex < 0) {
        newIndex = slides.length - 1
    };
    
    console.log(newIndex);
    activeSlide.removeAttribute("id","active-slide");
    slides[newIndex].setAttribute("id","active-slide");
    

}