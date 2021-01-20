$(function () {
    $("nav>ul>li").on({
        mouseenter: function () {
            $(this).children("div").stop().slideDown();
        },
        mouseleave: function () {
            $(this).children("div").stop().slideUp();
        }
    });
});