


    $(function () {
        setTimeout(function () {
            $('.fly-in-text').removeClass('cloud');
        }, 500);

    });

$(function () {
    $('a[href*="#"]:not([href="#"]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
});
