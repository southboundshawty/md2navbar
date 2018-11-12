$(window).ready(function() {
    if($(window).width() <= "480") {
        // $("nav").addClass(" nav-mini");
        // $(".nav-container").addClass(" nav-container-mini");
    }

    $(".search").click(function() {
        $(".nav-mini").toggleClass("nav-mini-opened");
        $(".nav-container").toggleClass("nav-container-mini-opened");
        $(".nav__item-mini").toggleClass(".nav__item-mini"); 
        $("#search-mini").toggleClass("#search-mini-opened");
        $(".hot-news-wrapper").toggleClass("hot-news-wrapper-opened"); 
        $(".nav-middle").toggleClass("nav-middle-opened");
    });

    $(".menuID").click(function() {
        $(".menu").slideToggle(150);
    });
})