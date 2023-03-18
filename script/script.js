
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



 
$('.team__slider .slider').slick({
  infinite: true,
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 1,

  prevArrow: '<button type="button" class="slider__arrow team__slider__arrow--prev"><i class="fa fa-angle-right"></i></button>',
  nextArrow: '<button type="button" class="slider__arrow team__slider__arrow--next"><i class="fa fa-angle-left"></i></button>',
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




const up =  document.querySelector(".up");
window.addEventListener("scroll", () => {
  if(window.scrollY>900) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});

up.addEventListener('click', () => {
  const duration = 500;
  const startingY = window.pageYOffset;
  const elementY = 0;
  

  function step(timestamp) {
    const progress = Math.min(1, (timestamp - start) / duration); 
    const ease = easeInOutQuad(progress);
    window.scrollTo(0, startingY + (elementY - startingY) * ease); 
    if (progress < 1) {
      window.requestAnimationFrame(step); 
    }
  }
  

  function easeInOutQuad(progress) {
    return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  }
  

  const start = performance.now(); 
  window.requestAnimationFrame(step);
});
