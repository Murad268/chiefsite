
$('.services__slider .slider').slick({
   infinite: true,
   slidesToShow: 4,
   centerMode: false,
   slidesToScroll: 1,

   prevArrow: '<button type="button" class="slider__arrow slider__arrow--prev"><i class="fa fa-angle-right"></i></button>',
   nextArrow: '<button type="button" class="slider__arrow slider__arrow--next"><i class="fa fa-angle-left"></i></button>',
   responsive: [
      {
        breakpoint: 788,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }
    ]
 });