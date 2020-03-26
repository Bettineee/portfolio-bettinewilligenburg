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
    
