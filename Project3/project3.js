
$("footer").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");

});

$('p.two').click(function () {

    $('html, body').animate({
        scrollTop: $("div.poster").offset().top
    }, 2000);

});

$('p.three').click(function () {

    $('html, body').animate({
        scrollTop: $("div.animal").offset().top
    }, 2000);

});
$('p.four').click(function () {

    $('html, body').animate({
        scrollTop: $("div.flower").offset().top
    }, 2000);
});
$('p.five').click(function () {

    $('html, body').animate({
        scrollTop: $("div.resume").offset().top
    }, 2000);
});

$('p.si').click(function () {

    $('html, body').animate({
        scrollTop: $("div.contact").offset().top
    }, 2000);
});




