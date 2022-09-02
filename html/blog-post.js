
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 3,
  // centeredSlidesBounds: true,
  // loop:true,
  // slidesOffsetAfter: 200,
  // slidesOffsetBefore:200,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    // when window width is >= 640px
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    800: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  },
})