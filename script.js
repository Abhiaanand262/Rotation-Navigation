var active = 3;
var mincircles = document.querySelectorAll(".minicircle");
var sec = document.querySelectorAll(".sec");

gsap.to(mincircles[active - 1], {
  opacity: 0.5,
});

gsap.to(sec[active - 1], {
  opacity: 1,
});

mincircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Expo.easeInOut,
      duration: 1,
    });

    greyout();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(sec[index], {
      opacity: 1,
    });
  });
});

function greyout() {
  gsap.to(mincircles, {
    opacity: 0.08,
  });
  gsap.to(sec, {
    opacity: 0.4,
  });
}

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});
