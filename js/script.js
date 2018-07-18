// $(window).scroll(function () {    
//     $('img').each(function () {
//         if ($(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height()) + 200) {
//             var dataAttr = $(this).data('src');
//             $(this).attr('src', dataAttr);
//             $(this).removeAttr('data-src');
//         }
//     });
// });
(function() {
    "use strict";
    var myOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    var callBackFunc = function(entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var dataAttr = entry.target.firstElementChild.getAttribute('data-src');
                if (dataAttr !== null) {
                    entry.target.firstElementChild.setAttribute('src', dataAttr);
                    entry.target.firstElementChild.removeAttribute('data-src');
                }
            }
        });
    }
    var observer = new IntersectionObserver(callBackFunc, myOptions);

    var items = document.querySelectorAll('.flex > .inner');
    for (var i = 0; i < items.length; i++) {
        observer.observe(items[i]); 
    }
    // items.forEach(function(item) {
    //     observer.observe(item);
    // });
})();