// variable declaration
const navbarTabs = Array(...document.querySelectorAll(".navbar__tab"))
const notificationIcon = document.querySelectorAll(".navbar__icon")[1];
const accountIcon = document.querySelectorAll(".navbar__icon")[4];
const notificationContent = document.querySelector(".notification__content");
const notificationCloseBtn = document.querySelector(".notification__close-btn");
const accountMenu = document.querySelector(".login-menu");
const tabs = Array(...document.querySelectorAll(".tab"));
const tabsBody = Array(...document.querySelectorAll(".tab__body"))
const videoPlayBtn = document.querySelector(".video__play__btn");
const videoSrc = document.querySelector(".video__src");
const video = document.querySelector(".video");
const videoContent = document.querySelector(".video__content")
const videoImages = Array(...document.querySelectorAll(".video__img"));

const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 4,
  // centeredSlidesBounds: true,
  // loop:true,
  // slidesOffsetAfter: 200,
  // slidesOffsetBefore:200,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const featuredSwiper = new Swiper('.featured-categories .swiper', {
  // Default parameters
  slidesPerView: 1,
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
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





// functions
function toogleMenu(e, element) {
  e.stopPropagation()
  if (element.classList.contains("close")) {
    navbarTabs.map(tab => {
      tab.firstChild.nextSibling.classList.remove("open");
      tab.firstChild.nextSibling.classList.add("close");
    })
    element.classList.replace("close","open");
  } else if (element.classList.contains("open")) {
    element.classList.replace("open", "close");
  }
  
}
function toogleNotification() {
  if (notificationContent.style.display === "block") {
    notificationContent.style.display = "none";
    document.body.style.overflow = "auto";
  }
  else {
    notificationContent.style.display = "block";
    document.body.style.overflow = "hidden";
  }
}
function closeNotification(e) {
  e.stopPropagation();
  notificationContent.style.display = "none";
  document.body.style.overflow = "auto"
}
function toogleAccount(e) {
  e.stopPropagation()
  if (accountMenu.classList.contains("close")) {
    accountMenu.classList.remove("close");
    accountMenu.classList.add("open");
  } else if (accountMenu.classList.contains("open")){
    accountMenu.classList.remove("open");
    accountMenu.classList.add("close");
  }
}

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

function playVideo(e) {
  video.removeAttribute("loop")
  videoContent.style.display = "none"
  video.play();
}

function videoReset(e) {
  video.removeAttribute("loop")
  videoContent.style.display = "block"
}

function videoChange(e) {
  console.log(e.target.classList[1])
  if (e.target.classList[1] === "zero") {
    video.pause()
    videoSrc.setAttribute("src", "../assets/videos/WhatsApp Video 2022-08-07 at 6.40.33 PM (online-video-cutter.com).mp4")
    playVideo()
  } else if (e.target.classList[1] === "one") {
    video.pause()
    videoSrc.setAttribute("src","../assets/videos/WhatsApp Video 2022-08-07 at 6.40.33 PM (online-video-cutter.com).mp4")
    playVideo()
  } else if (e.target.classList[1] === "two") {
    video.pause()
    videoSrc.setAttribute("src", "../assets/videos/WhatsApp Video 2022-08-07 at 6.40.33 PM (online-video-cutter.com).mp4")
    playVideo()
  }
}

// page logic
navbarTabs.map(tab => {
  tab.addEventListener("click",(e)=>toogleMenu(e,tab.firstChild.nextSibling))
})

tabs.map(tab => {
  tab.addEventListener("click", (e) => makeTabActive(e))
})

videoImages.map(image => {
  image.addEventListener("click",(e)=> videoChange(e))
})

notificationIcon.addEventListener("click", (e) => toogleNotification(e));
notificationCloseBtn.addEventListener("click", (e) => closeNotification(e));
document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarTabs.map(tab => {
    tab.firstChild.nextSibling.classList.remove("open")
    tab.firstChild.nextSibling.classList.add("close")
  })
  accountMenu.classList.remove("open");
  accountMenu.classList.add("close");
})

accountIcon.addEventListener("click", (e) => toogleAccount(e));
videoPlayBtn.addEventListener("click", (e) => playVideo(e));
video.addEventListener("ended", (e) => videoReset(e));
