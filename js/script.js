// $(window).scroll(function () {    
//     $('img').each(function () {
//         if ($(this).attr('data-src') && $(this).offset().top < ($(window).scrollTop() + $(window).height()) + 200) {
//             let dataAttr = $(this).data('src');
//             $(this).attr('src', dataAttr);
//             $(this).removeAttr('data-src');
//         }
//     });
// });


let myOptions = {
    root: null,
    rootMargin: "50% 0px 0px 0px",
    threshold: 0
};
let callBackFunc = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let dataAttr = entry.target.firstElementChild.getAttribute('data-src');
            if (dataAttr !== null) {
                entry.target.firstElementChild.setAttribute('src', dataAttr);
                entry.target.firstElementChild.removeAttribute('data-src');
            }
        }
    });
}
let observer = new IntersectionObserver(callBackFunc, myOptions);

let items = document.querySelectorAll('.flex > .inner');

items.forEach((item) => {
    observer.observe(item);
});