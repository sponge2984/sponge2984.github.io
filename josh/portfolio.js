$(document).ready(function() {
    console.log("ready!");
    window.onscroll = function() { homenavbarcontrol() };
})

//控制首頁navbar
function homenavbarcontrol() {
    if (window.scrollY != 0) {
        $('.mynavbar').addClass('mynavbarscroll');
    } else {
        $('.mynavbar').removeClass('mynavbarscroll');
    }
}

//滾動到element位置
function scrollto(elm) {
    $('html, body').animate({
        scrollTop: $(elm).offset().top - 120
    }, 500);
    $('.navbar-toggler').click();

}