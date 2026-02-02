document.addEventListener("DOMContentLoaded", function () {
  const isDesktop = () => window.innerWidth >= 991;
  // searchbar - open
  // document
  //   .querySelector(".header-searchbar__search")
  //   ?.addEventListener("click", function () {
  //     if (!isDesktop()) return;
  //     const header = document.querySelector(".header");
  //     if (header && !header.classList.contains("searching")) {
  //       header.classList.add("searching");
  //     }
  //   });

  // searchbar - close
  // document
  //   .querySelector(".header-searchbar__close")
  //   ?.addEventListener("click", function () {
  //     if (!isDesktop()) return;
  //     document.querySelector(".header")?.classList.remove("searching");
  //   });
});
$(".header-searchbar__search").click(function () {
  if ($(window).width() > 991) {
    if (!$(".header").hasClass("searching")) {
      $(".header").addClass("searching");
    }
  } else {
    if ($(this).hasClass("dropdown")) {
      $(this).removeClass("dropdown");
      $(".header-searchbar__input").slideUp(300);
    } else {
      $(this).addClass("dropdown");
      $(".header-searchbar__input").slideDown(300).css("display", "flex");
    }
  }
});

$(".header-searchbar__close").click(function () {
  if ($(window).width() > 991) { 
    $(".header").removeClass("searching");
  } else {
    $(".header-searchbar__search").removeClass("dropdown");
    $(".header-searchbar__input").slideUp(300);
  }
});

// menu
$(".header__menu").click(function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
});

$(window).on("resize scroll", function () {
  if ($(window).width() > 991) {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("scrolldown");
    } else {
      $(".header").removeClass("scrolldown");
    }
  }
});

$(".header__nav>ul>li>a").click(function () {
  if ($(window).width() <= 991) { 
    if ($(this).hasClass("has-child")) {
      $(this).toggleClass("dropdown");
      $(this).parents("li").find("ul").slideToggle(300);
    }
  }
});
