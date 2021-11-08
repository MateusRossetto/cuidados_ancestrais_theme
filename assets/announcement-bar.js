var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("announcement-bar-list");
}

slides[slideIndex-1].style.display = "block";
window.onload= function () {
    setInterval(function(){ 
        plusSlides(1);
    }, 3000);
}