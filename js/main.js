$(document).ready(function(){
    $('.gallery__slider').slick({
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '<button type="button" class="slick-left"><img src="././images/arrow-1.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-right"><img src="././images/arrow-2.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 1460,
              settings: {
                arrows: false,
              }
            },
            {
              breakpoint: 1310,
              settings: {
                centerMode: false,
                arrows: false,
              }
            }
        ]
    });
  });
