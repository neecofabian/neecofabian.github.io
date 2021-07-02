$('.course').width($('.marquee-left1').width()); // For the marquees

// To make all dropdown options the widest size
$(document).ready(function() {
  $(".dropdown-items").css({
    'width': ($(".dropdown-button").width() + 'px')
  });
});

// Pivot courses when not on mobile
if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    // Using vanilla-tilt.js
    VanillaTilt.init(document.querySelectorAll(".course"), {
      max: 7,
      speed: 300,
      glare: true,
      "max-glare": 0.4
    });

    // pivot.init({selector: ".course", shine: true}); // Using pivot.js
}


gsap.registerPlugin("ScrollTrigger");

// Fade the chevron
gsap.to(".arrow", {
  opacity: 0,
  scrollTrigger: {
      trigger: ".arrow",
      start: "top center+=10%",
      end: "top center-=10%",
      scrub: 0.4
  }
})

// Show each tool
const tools = gsap.utils.toArray('.tool');
tools.forEach(tool => {
  gsap.to(tool, {
    scrollTrigger: {
        trigger: tool,
        start: "top center+=5%",
        // end: "+=150%",
        scrub: 0.4,
        toggleClass: {targets: tool, className: "tool-seen"},
    }
  })
});

// Flip the flap
var toolTimeline = gsap.timeline();
toolTimeline.to(".flap", { rotationX: 180, })
ScrollTrigger.create({
    trigger: ".tools",
    animation: toolTimeline,
    start: "top center+=15%",
    end: "top center-=15%",
    scrub: 0.4,
    // toggleClass: {targets: ".flap-text", className: "flap-text-seen"}
})

// end: () => `+=${document.querySelector(".programmer").offsetHeight}`,
// toggleClass: ".tool-seen",
// pinSpacing: false,
// markers: true,

// Unite the circles
gsap.registerPlugin(MotionPathPlugin);
var redCircleTimeline = gsap.timeline();
var blueCircleTimeline = gsap.timeline();
var greenCircleTimeline = gsap.timeline();

gsap.set("#red-circle", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});
gsap.set("#blue-circle", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});
gsap.set("#green-circle", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

redCircleTimeline.to("#red-circle", {motionPath: {path: "#red-path", align: "#red-path", end: 0.5} });
blueCircleTimeline.to("#blue-circle", {motionPath: {path: "#blue-path", align: "#blue-path", end: 0.5} });
greenCircleTimeline.to("#green-circle", {motionPath: {path: "#green-path", align: "#green-path", end: 0.5} });

ScrollTrigger.create({
  trigger: ".looking-for",
  animation: redCircleTimeline,
  start: "top center+=15%",
  end: "top center-=15%",
  scrub: 0.4
})

ScrollTrigger.create({
  trigger: ".looking-for",
  animation: blueCircleTimeline,
  start: "top center+=15%",
  end: "top center-=15%",
  scrub: 0.4
})

ScrollTrigger.create({
  trigger: ".looking-for",
  animation: greenCircleTimeline,
  start: "top center+=15%",
  end: "top center-=15%",
  scrub: 0.4
})

function copyToClipboard() {
  var copyText = document.querySelector("#email-address");
  copyText.value = "neecofabian@gmail.com";
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.querySelector(".copied").classList.add("click");
}

document.querySelector("#email-link").addEventListener("click", copyToClipboard);