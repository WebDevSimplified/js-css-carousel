const buttons = document.querySelectorAll("[data-carousel-button]")  /* selects the buttons and store in buttons variable (now an array) */

buttons.forEach(button => {  /* loops thru all buttons and adding an event listener that will perform a function */
  button.addEventListener("click", () => 
  
  
  
  {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })



})

/* the function basically sets data-active into one of the slides by using offset variable as index (or new index) adding or subtracting depending
on which button is pressed which will set the data-attribute to the element with the new index */