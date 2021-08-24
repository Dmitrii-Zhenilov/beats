
const slider = $('.characteristics__slider').bxSlider({
    pager:false,
    controls:false
});

$('.characteristics__arrow-prew').click(e => {
    slider.goToPrevSlide();
})
$('.characteristics__arrow-next').click(e => {
    slider.goToNextSlide();
})