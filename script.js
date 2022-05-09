/*
$(document).ready(function(){
    if ($(window).scroll( function(){
        $('.item-sidebar').fadeOut($(this) > 1);
    }));

    else ($(window).scroll( function(){
        $('.item-sidebar').fadeIn($(this) < 1);
    }));      
});
*/

/*
data-aos="slide-right";
data-aos-anchor="#trigger-left";
data-aos-anchor-placement="top-top";
*/

/*
{
    const nav = document.querySelector("item-sidebar");
    let lastScrollX = window.scrollX;

    window.addEventListener("scroll", () => {
        if (lastScrollX < window.scrollX) {
            nav.classList.add("nav--hidden");
        } else {
            nav.classList.remove("nav--hidden");
        }

        lastScrollX = window.scrollX;
    });
};
*/

if (window.pageXOffset > 100) {
    
} 