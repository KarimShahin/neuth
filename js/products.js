const menu = ["1","2","3","4"]
const reviewsSwiper = new Swiper(".swiper-container", {
   // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
      renderBullet: function (index, className) {
        
          return `<span class="${className}">${menu[index]}</span>`;
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })