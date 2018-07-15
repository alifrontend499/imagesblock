$(window).scroll(function () {
    $('img').each(function () {
        if ($(this).offset().top < ($(window).scrollTop() + $(window).height())) {
            var dataAttr = $(this).data('src');
            $(this).attr('src', dataAttr);
            $(this).removeAttr('data-src');
        }
    });
})