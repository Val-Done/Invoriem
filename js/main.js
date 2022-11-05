$(document).ready(function () {
  $(".owl-carousel").owlCarousel(
    {
      items: 3,
      loop: true,
      responsive: {
        // breakpoints from 0 to up
        0: {
          items: 2,
          margin: 32,
          dots: false,
          loop: true,
        },
        // breakpoints from 480 up
        601: {
          items: 3,
          dots: false,
          margin: 32,
          loop: true,
        },
        // breakpoints from 1000 up
        1001: {
          items: 3,
          margin: 48,
          dots: false,
          loop: true,
        },
      },
    }
    //
  );
});

/*video */
const videoBtn = document.querySelector("#video-btn");

const videoPicture = document.querySelector(".video__picture");

const videoWrapper = document.querySelector(".video");

const video = document.querySelector("#video-file");

videoWrapper.addEventListener("click", function () {
  if (video.paused) {
    videoPicture.classList.add("hidden");
    videoWrapper.classList.remove("video-overlay");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoWrapper.classList.add("video-overlay");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

// * Mobile Nav*
const openNavbtn = document.querySelector("#openMobileNav");
const closeNavbtn = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobileNav");

openNavbtn.onclick = function () {
  mobileNav.classList.remove("none");
  document.body.classList.add("no-scroll");
};
closeNavbtn.onclick = function () {
  mobileNav.classList.add("none");
  document.body.classList.remove("no-scroll");
};
