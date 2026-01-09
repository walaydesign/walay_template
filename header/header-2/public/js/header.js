// menu
// $(".header__menu").click(function () {
//   $(this).toggleClass("active");
//   $(".header-nav").toggleClass("active");
// });

// searchbar
// $(".header-searchbar__search").click(function () {
//   if (!$(".header").hasClass("searching")) {
//     $(".header").addClass("searching");
//   }
// });

// $(".header-searchbar__close").click(function () {
//   $(".header").removeClass("searching");
// });



document.addEventListener("DOMContentLoaded", function () {
  // menu
  document
    .querySelector(".header-menu")
    ?.addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header-nav__list")?.classList.toggle("active");
    });

  // searchbar - open
  document
    .querySelector(".header-searchbar__search")
    ?.addEventListener("click", function () {
      const header = document.querySelector(".header");
      if (header && !header.classList.contains("searching")) {
        header.classList.add("searching");
      }
    });

  // searchbar - close
  document
    .querySelector(".header-searchbar__close")
    ?.addEventListener("click", function () {
      document.querySelector(".header")?.classList.remove("searching");
    });
});