$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
    });
    
    $('.top-nav .nav-list').on('click', function () {
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
    });
    
    AOS.init({
    easing: 'ease',
    duration: 1800
    });
    });
    
    //Get the button:
    mybutton = document.getElementById("myBtn");
    
    // When the user scrolls down 40px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    

    var slideIndex = [1,1,1];
    /* Class the members of each slideshow group with different CSS classes */
    var slideId = ["mySlides1", "mySlides2", "mySlides3"] 
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);
    
    function plusSlides(n, no) {
      showSlides(slideIndex[no] += n, no);
    }
    
    function showSlides(n, no) {
      var i;
      var x = document.getElementsByClassName(slideId[no]);
      if (n > x.length) {slideIndex[no] = 1} 
      if (n < 1) {slideIndex[no] = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      x[slideIndex[no]-1].style.display = "block"; 
    }
    
