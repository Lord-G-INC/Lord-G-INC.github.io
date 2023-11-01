$(document).ready(function() {
    var carousel = $('.carousel');
    var scrollInterval = 5000;

    function scrollCarousel() {
        var currentScrollLeft = carousel.scrollLeft();
        var cardWidth = $('.card').outerWidth() + 10; // 10px for margin
        if (carousel.scrollLeft() + carousel.innerWidth() >= carousel[0].scrollWidth) {
            // Reset scroll to the beginning
            carousel.scrollLeft(0);
            return;
        }
        carousel.animate({
            scrollLeft: currentScrollLeft + cardWidth
        }, 500);
    }

    var autoScroll = setInterval(scrollCarousel, scrollInterval);

    // Pause auto-scroll on hover (optional)
    /*carousel.hover(function() {
        clearInterval(autoScroll);
    }, function() {
        autoScroll = setInterval(scrollCarousel, scrollInterval);
    });*/
});