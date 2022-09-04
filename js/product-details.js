const tabs = Array(...document.querySelectorAll(".tab"));
const tabsBody = Array(...document.querySelectorAll(".tab__body"))
const menu = ["1","2","3","4","5","6","7"]

const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 1,
  // centeredSlidesBounds: true,
  // loop:true,
  // slidesOffsetAfter: 200,
  // slidesOffsetBefore:200,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const productImgSwiper = new Swiper('.product__images__slider .swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 1,
  // centeredSlidesBounds: true,
  // loop:true,
  // slidesOffsetAfter: 200,
  // slidesOffsetBefore:200,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

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

function makeTabActive(e) {
  tabs.map(tab => {
    tab.classList.remove("active")
  });
  tabsBody.map(tab => {
    tab.classList.remove("active");
  })
  e.target.classList.add("active");
  let elementClass = `.${e.target.classList[1]}__body`;
  let element = document.querySelector(elementClass);
  element.classList.add("active");
}

tabs.map(tab => {
  tab.addEventListener("click", (e) => makeTabActive(e))
})