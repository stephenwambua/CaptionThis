$(document).ready(function () {
  $("#in").click(function (event) {
    $("#in").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $("#out").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $(".login-page").fadeIn(2000);
  })

  $(".sms a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  })
  event.preventDefault();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
}