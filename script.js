$('.course').width($('.marquee-left1').width()); // for marquee

// Pivot courses when not on mobile
if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    // pivot.init({
    //     selector: ".course",
    //     shine: true,
    // });

    // alt pivot test

    VanillaTilt.init(document.querySelectorAll(".course"), {
      max: 8,
      speed: 300,
      glare: true
    });
}

gsap.registerPlugin("ScrollTrigger");

// Show each tool
const tools = gsap.utils.toArray('.tool');
tools.forEach(tool => {
  gsap.to(tool, {
    scrollTrigger: {
        trigger: tool,
        start: "top center+=5%",
        // end: "+=150%",
        scrub: true,
        toggleClass: {targets: tool, className: "tool-seen"},
    }
  })
});

// Flip the flap
var timeline = gsap.timeline();
timeline.to(".flap", { rotationX: 180, })
ScrollTrigger.create({
    trigger: ".tools",
    animation: timeline,
    start: "top center+=15%",
    end: "top center-=15%",
    scrub: true,
    // toggleClass: {targets: ".flap-text", className: "flap-text-seen"}
})

gsap.to(".arrow", {
    opacity: 0,
    // duration: 0.4,
    scrollTrigger: {
        trigger: ".arrow",
        start: "top center+=10%",
        end: "top center-=10%",
        scrub: true,
        
    }
  })

// end: () => `+=${document.querySelector(".programmer").offsetHeight}`,
// toggleClass: ".tool-seen",
// pinSpacing: false,
// markers: true,