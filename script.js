$('.course').width($('.marquee-left1').width());

if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    pivot.init({
        selector: ".course",
        shine: true
    });
}