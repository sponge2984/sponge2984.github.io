$(document).ready(function () {
    console.log("ready!");
    window.onscroll = function () {
        homenavbarcontrol();
    };
    new WOW().init();
    $(".card_container").masonry();
    window.addEventListener("scroll", volleyballmove);
});

$.fn.animateRotate = function (angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function (i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function (now) {
            $.style(e, "transform", "rotate(" + now + "deg)");
            if (step) return step.apply(e, arguments);
        };
        $({ deg: angle }).animate({ deg: angle }, args);
    });
};

function volleyballmove() {
    $(".volleyball").animateRotate(window.scrollY);
}
//控制首頁navbar
function homenavbarcontrol() {
    if (window.scrollY > 450) {
        $(".mynavbar").addClass("mynavbarscroll");
    } else {
        $(".mynavbar").removeClass("mynavbarscroll");
    }
}

//滾動到element位置
function scrollto(elm) {
    $("html, body").animate(
        {
            scrollTop: $(elm).offset().top - 70,
        },
        500
    );
    $(".navbar-toggler").click();
}
