let btnLeft = document.getElementById("prev");
let btnRight = document.getElementById("next");

let slider = document.querySelector(
  " .testimonial-container .testmonial-carousel"
);

btnRight.addEventListener("click", nextSlide);

function nextSlide() {
  slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener("click", prevSlide);
function prevSlide() {
  slider.prepend(slider.lastElementChild);
}
