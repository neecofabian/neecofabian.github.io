$('.course').width($('.marquee-left1').width());

if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    pivot.init({
        selector: ".course",
        shine: true
    });
}

gsap.registerPlugin("ScrollTrigger");
gsap.to(".toolbox-section", {
    scrollTrigger: {
        trigger: ".toolbox-section",
        start: "top 20%",
        pin: ".toolbox-section",
        scrub: true,
        sensitivity: 100
        // markers: true
    }
})

// gsap.to(".tool", {
//     y: '300%',
//     scrollTrigger: {
//         trigger: ".toolbox-section",
//         start: "top center",
//         end: "bottom end",
//         scrub: true,
//         markers: true
//     }
// })

const tools = gsap.utils.toArray('.tool');
tools.reverse().forEach(tool => {
  gsap.to(tool, { // this will animate ALL boxes
    y: '300%',
    scrollTrigger: {
        trigger: tool,
        start: "top center",
        end: "+=100%",
        scrub: true,
        toggleClass: {targets: tool, className: "tool-seen"},
        markers: true
    }
  })
});

gsap.to(".section-title", {
    scrollTrigger: {
        trigger: ".section-title",
        start: "top top",
        // end: () => `+=${document.querySelector(".programmer").offsetHeight}`,
        // scrub: true,
        pin: true,
        // toggleClass: ".tool-seen",
        // pinSpacing: false,
        markers: true
    }
  })