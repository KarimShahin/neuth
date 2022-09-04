
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup:2,
  // centeredSlidesBounds: true,
  // loop:true,
  // slidesOffsetAfter: 200,
  // slidesOffsetBefore:200,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    // when window width is >= 640px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  },
})