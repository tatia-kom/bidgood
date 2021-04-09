$(document).ready(function() {

    $('.customers__slider').slick({
        arrows: false,
        dots: false,
        swipe: true,
        infinite: true,
        speed: 700,
        variableWidth: true,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });

});