const slideContainer = document.querySelector('.slide-container');
let slides = document.querySelectorAll('.slide-container img');
let slideIndex = 0;

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
