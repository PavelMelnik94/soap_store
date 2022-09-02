var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button"
    },
    effect: "fade",
    loop: "infinite",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    }
});
console.log('???')
swiper.on('slideChange', function (sld) {
    console.log('???')
    document.body.setAttribute('data-sld', sld.realIndex);
})