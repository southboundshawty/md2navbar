$(window).ready(function() {
  if ($(window).width() <= "480") {

  }

  $("#search-mini").click(function() {
    $(".nav-mini").toggleClass("nav-mini-opened");
    $(".nav-mini-content").toggleClass("nav-mini-content-opened");
    $(".nav-mini-top").toggleClass("nav-mini-top-opened");
    $(".nav-mini-footer").toggleClass("nav-mini-footer-opened");
  });
});
