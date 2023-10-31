$(document).ready(function () {
    var autoplayInterval;

    $('.carousel').carousel({
        indicators: false,
        // fullWidth: true,
        duration: 800,
    });

    function startAutoplay() {
        autoplayInterval = setInterval(function () {
            $('.carousel').carousel('next');
        }, 3000);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Start autoplay
    startAutoplay();

    // Pause autoplay on hover
    $('.carousel').hover(function () {
        stopAutoplay();
    }, function () {
        startAutoplay();
    });
});
