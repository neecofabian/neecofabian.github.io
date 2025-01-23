$('.course').width($('.marquee-left1').width()); // For the marquees

const extraProjects = document.querySelectorAll(".extra-project");
const extraCourses = document.querySelectorAll(".extra-course");
const extraProjectsButton = document.querySelector("#more-projects-btn");
const extraCoursesButton = document.querySelector("#more-courses-btn");
let hideExtraProjects = true;
let hideExtraCourses = true;

// Make all dropdown options the widest size
$(document).ready(function() {
    $(".dropdown-items").css({
    'width': ($(".dropdown-button").width() + 'px')
    });
});

// Update to correct size on window size change. A bit of a hack.
$(window).on("resize", function() {
    $(document).ready(function() {
        $(".dropdown-items").css({
        'width': ($(".dropdown-button").width() + 'px')
        });
    });
});


// Pivot courses when not on mobile with vanilla-tilt.js
if (!(window.matchMedia("only screen and (max-width: 750px)").matches)) {
    VanillaTilt.init(document.querySelectorAll(".course"), {
      max: 7,
      speed: 300,
      glare: true,
      "max-glare": 0.4
    });
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
        start: "top center+=12%",
        scrub: 0.4,
        toggleClass: {targets: tool, className: "tool-seen"}
    }
  })
});

// Hide/show extra projects
function toggleExtraProjects() {
    hideExtraProjects = !hideExtraProjects;

    for (let i = 0; i < extraProjects.length; i++) {
        if (!hideExtraProjects) {
            extraProjects[i].style.display = "flex";
        } else {
            extraProjects[i].style.display = "none";
        }
    }
    ScrollTrigger.refresh();
}

extraProjectsButton.addEventListener('click', () => {
    toggleExtraProjects();
    
    if (hideExtraProjects) {
        extraProjectsButton.innerHTML = "Show More";
    } else {
        extraProjectsButton.innerHTML = "Show Less";
    }
});

// Hide/show extra courses
function toggleExtraCourses() {
    hideExtraCourses = !hideExtraCourses;

    for (let i = 0; i < extraCourses.length; i++) {
        if (!hideExtraCourses) {
            extraCourses[i].style.display = "flex";
        } else {
            extraCourses[i].style.display = "none";
        }
    }
    ScrollTrigger.refresh();
}

extraCoursesButton.addEventListener('click', () => {
    toggleExtraCourses();
    
    if (hideExtraCourses) {
        extraCoursesButton.innerHTML = "Show More";
    } else {
        extraCoursesButton.innerHTML = "Show Less";
    }
});

// Flip the flap
var toolTimeline = gsap.timeline();
toolTimeline.to(".flap", { rotationX: 180, })
ScrollTrigger.create({
    trigger: ".tools",
    animation: toolTimeline,
    start: "top center+=15%",
    end: "top center-=15%",
    scrub: 0.4
})


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


// Copy email to clipboard
function copyToClipboard() {
  var copyText = document.querySelector("#email-address");
  copyText.value = "neecofabian@gmail.com";
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.querySelector(".copied").classList.add("click");
}

function copyToClipboard2() {
  var copyText = document.querySelector("#email-address");
  copyText.value = "neecofabian@gmail.com";
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.querySelector(".copied2").classList.add("click");
}

document.querySelector("#email-link").addEventListener("click", copyToClipboard);
document.querySelector("#email-footer-link").addEventListener("click", copyToClipboard2);


// Fade the logo link
gsap.to(".logo-link", {
  opacity: 1,
  scrollTrigger: {
      trigger: ".arrow",
      start: "top top+=10%",
      end: "top top",
      scrub: 0.2
  }
})


// Recalculate logo position on resize and reload if max section width reached
function shiftLogoLink() {
  if (document.querySelector(".programmer").offsetWidth >= 2250) {
    var rightPadding = (window.innerWidth - 2250) / 2;
    document.querySelector(".logo-link").style.right = rightPadding.toString() + "px";
  } else {
    document.querySelector(".logo-link").style.right = "10vw";
  }
}

window.addEventListener('resize', shiftLogoLink);
window.addEventListener('load', shiftLogoLink);