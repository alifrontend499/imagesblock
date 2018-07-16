// $(window).scroll(function () {
//     $('img').each(function () {
//         if ($(this).offset().top < ($(window).scrollTop() + $(window).height())) {
//             let dataAttr = $(this).data('src');
//             $(this).attr('src', dataAttr);
//             $(this).removeAttr('data-src');
//         }
//     });
// })

const observer = new IntersectionObserver((entries, options) => {
    entries.forEach(entry => {
        if (entry.isIntersecting == true) {
            let dataAttr = entry.target.firstElementChild.getAttribute('data-src');
            if (dataAttr !== null) {
                entry.target.firstElementChild.setAttribute('src', dataAttr);
                entry.target.firstElementChild.removeAttribute('data-src');
            }
        }
    });

});

let items = document.querySelectorAll('.flex > .inner');
items.forEach((item) => {
    observer.observe(item);
});

