$(() => {

    // ** Variables ** //
    const $navbar = $('.navbar');
    const $navbarToggler = $('.navbar-toggler');
    const $dropdown = $('.dropdown');
    const $dropdownToggle = $('.dropdown-toggle');
    const $dropdownMenu = $('.dropdown-menu');
    const $dropdownItem = $('.dropdown-item');
    const $navlink = $('.nav-link');
    const $navItem = $('.nav-item');

    /*--------------------------------------------------------------
                            Navigation
    --------------------------------------------------------------*/
    /* Show dropdown-submenu */
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
    });

    /* Nav link active */
    $navlink.click(function(){
        $navlink.removeClass('active');
        $(this).addClass('active');
    });

    /* Navbar white background on mobile */
    $navbarToggler.click(function(){
        $navbar.toggleClass('navbar-white');
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

/*--------------------------------------------------------------
                        ?
--------------------------------------------------------------*/

$("#management").click(function(){
  $(".about-us-management-popup").toggle();
});