$(() => {

    // ** Variables ** //
    const $dropdown = $('.dropdown');
    const $dropdownToggle = $('.dropdown-toggle');
    const $dropdownMenu = $('.dropdown-menu');
    const $navlink = $('.nav-link');
    const $navItem = $('.nav-item');

    /*--------------------------------------------------------------
                            Navigation
    --------------------------------------------------------------*/

    /*$dropdownToggle.on("mouseenter", function () {
        // $(this).dropdown('show');
         $(this).next('li').show();
    });

    $dropdownMenu.on("mouseleave", function () {
         $(this).dropdown('hide');
    });*/

    /*$dropdownToggle.on("mouseleave", function() {
        $dropdownMenu('hide');
    });*/

    $dropdownToggle.on("mouseenter", function(){
        $(this).next('li').toggle();
    });

    $dropdownMenu.on("mouseleave", function(){
        $(this).hide();
    });

    $( '#nav-section .navbar-nav a' ).on( 'click', function () {
        $( '#nav-section .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
    });

});

/*--------------------------------------------------------------
                        Homepage slideshow
--------------------------------------------------------------*/
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
    var x = document.getElementsByClassName("slideshow-item");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " white";
}

/*--------------------------------------------------------------
                        Slideshow automation
--------------------------------------------------------------*/
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideshow-item");
    var dots = document.getElementsByClassName("demo");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" white", "");
    }
    dots[myIndex-1].className += " white";
    setTimeout(carousel, 4000); // Change image every 3 seconds
}

/* Nav link active */
/*
var link = document.getElementById("nav-link");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}*/

$("#management").click(function(){
  $(".about-us-management-popup").toggle();
});