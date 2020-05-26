$(document).ready(function() {
    console.log("ready!");
    window.onscroll = function() { homenavbarcontrol() };

    $(".card_container").masonry();
})

//控制首頁navbar
function homenavbarcontrol() {
    if (window.scrollY > 450) {
        $('.mynavbar').addClass('mynavbarscroll');
    } else {
        $('.mynavbar').removeClass('mynavbarscroll');
    }
}

//滾動到element位置
function scrollto(elm) {
    $('html, body').animate({
        scrollTop: $(elm).offset().top - 80
    }, 500);
    $('.navbar-toggler').click();

}