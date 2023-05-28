$(document).ready(function() {
   $(document).mousemove(function(event) {
        let posicionX = event.clientX / $(window).width() * 100;
        let posicionY = (event.clientY + 50) / $(window).width() * 100;
        $('.AppBgEffect').css('background-image', `radial-gradient(circle at ${posicionX}% ${posicionY}%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.98) 8%`);
    });
});