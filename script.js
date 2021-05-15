$('.course').width($('.marquee-left1').width());

if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    pivot.init({
        selector: ".course",
        shine: true
    });
}

// UNCOMMENT LATER
gsap.registerPlugin("ScrollTrigger");
// gsap.to(".toolbox-section", {
//     scrollTrigger: {
//         trigger: ".toolbox-section",
//         start: "top 20%",
//         pin: ".toolbox-section",
//         scrub: true,
//         sensitivity: 100
//         // markers: true
//     }
// })

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

// UNCOMMENT LATER
const tools = gsap.utils.toArray('.tool');
tools.reverse().forEach(tool => {
  gsap.to(tool, { // this will animate ALL boxes
    // y: '300%',
    scrollTrigger: {
        trigger: tool,
        start: "top center+=5%",
        // end: "+=150%",
        scrub: true,
        toggleClass: {targets: tool, className: "tool-seen"},
        // markers: true
    }
  })
});

// gsap.to(".section-title", {
//     scrollTrigger: {
//         trigger: ".section-title",
//         start: "top top",
//         // end: () => `+=${document.querySelector(".programmer").offsetHeight}`,
//         // scrub: true,
//         pin: true,
//         // toggleClass: ".tool-seen",
//         pinSpacing: false,
//         // markers: true
//     }
//   })

var timeline = gsap.timeline();

timeline.to(".flap",
{
    rotationX: 180,
})

ScrollTrigger.create({
    trigger: ".tools",
    animation: timeline,
    start: "top center+=15%",
    end: "top center-=15%",
    scrub: true,
    // toggleClass: {targets: ".flap-text", className: "flap-text-seen"}
    // markers: true
})

// gsap.to(".flap", {
//         rotateX: 170,
//         scrollTrigger: {
//             trigger: ".toolbox-section",
//             start: "top center", 
//             // end: () => `+=${document.querySelector(".programmer").offsetHeight}`,
//             scrub: true,
//             // pin: true,
//             // toggleClass: ".flap-move",
//             // pinSpacing: false,
//             // markers: true
//         }
//       })