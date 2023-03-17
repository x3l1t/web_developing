function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  // When the user clicks on div, open the popup
         function myFunction1() {
           var popup = document.getElementById("Popup2");
           popup.classList.toggle("show");
         }
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
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { 
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; }

  var slideIndex = 1;
      showDivs(slideIndex);
      
      function plusDivs(n) {
        showDivs(slideIndex += n);
      }
      
      function currentDiv(n) {
        showDivs(slideIndex = n);
      }
      
      function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} 
        for (i = 0; i < x.length; i++) { 
          x[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) { 
          dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " w3-white";
      }
  
      var slides = document.querySelectorAll('.slide');
          var currentSlide = 0;
          var slideInterval = setInterval(nextSlide, 5000);
      
          function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
          }

          