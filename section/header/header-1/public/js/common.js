AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

// go to top
$(".btn-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

// menu
$(".header__menu").click(function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
});

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 6, //一次移動幾個
  centeredSlides: true, //對準中心
  loop: true, //無限輪迴
  direction: "vertical",
  observeParents: true,
  observer: true,
  allowTouchMove: false,
  thumbs: {
    swiper: "swiper名稱",
  },
  simulateTouch: false, //不能點選
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar", //型態:進度條
  },
  scrollbar: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  keyboard: {
    enable: true, //可用鍵盤控制
  },
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});