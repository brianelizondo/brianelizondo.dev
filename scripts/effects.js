$(document).ready(function() {
   $(document).mousemove(function(event) {
        let posicionX = Math.round(event.clientX / $(window).width() * 100);
        let posicionY = Math.round(event.clientY / $(window).height() * 100);
        $('.AppBgEffect').css('background-image', `radial-gradient(circle at ${posicionX}% ${posicionY}%, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.99) 15%`);
    });
});
