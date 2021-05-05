$('.course').width($('.marquee-left1').width());

// pivot.init({
//     selector: ".project",
//     shine: true
// });
if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    pivot.init({
        selector: ".course",
        shine: true
    });
}