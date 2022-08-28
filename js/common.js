const navbarTabs = Array(...document.querySelectorAll(".navbar__tab"))
const notificationIcon = document.querySelectorAll(".navbar__icon")[1];
const accountIcon = document.querySelectorAll(".navbar__icon")[4];
const notificationContent = document.querySelector(".notification__content");
const notificationCloseBtn = document.querySelector(".notification__close-btn");
const accountMenu = document.querySelector(".login-menu");
const closeSideMenu = document.querySelector(".close__btn__icon");
const navMenu = document.querySelector(".navbar__tabs");
const openSideMenu = document.querySelector(".hamburger__menu");
const closeSearchBar = document.querySelector(".search__close");
const searchBar = document.querySelector(".navbar__icon");

function toogleMenu(e, element) {
  e.stopPropagation()
  if (element.classList.contains("close")) {
    navbarTabs.map(tab => {
      tab.classList.remove("active__tab")
      tab.firstChild.nextSibling.classList.remove("open");
      tab.firstChild.nextSibling.classList.add("close");
    })
    e.target.classList.add("active__tab")
    element.classList.replace("close","open");
  } else if (element.classList.contains("open")) {
    e.target.classList.remove("active__tab")
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
function closeNavMenu(e) {
  console.log(navMenu)
  navMenu.style.display = "none"
}
function openNavMenu(e) {
  console.log(navMenu)
  navMenu.style.display = "flex"
}


navbarTabs.map(tab => {
  tab.addEventListener("click",(e)=>toogleMenu(e,tab.firstChild.nextSibling))
})

notificationIcon.addEventListener("click", (e) => toogleNotification(e));
notificationCloseBtn.addEventListener("click", (e) => closeNotification(e));
document.body.addEventListener("click", (e) => {
  e.stopPropagation();
  navbarTabs.map(tab => {
    tab.classList.remove("active__tab")
    tab.firstChild.nextSibling.classList.remove("open")
    tab.firstChild.nextSibling.classList.add("close")
  })
  accountMenu.classList.remove("open");
  accountMenu.classList.add("close");
})

document.body.addEventListener("resize", (e) => {
  if (window.innerWidth > 1200) {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none"
  }
})

accountIcon.addEventListener("click", (e) => toogleAccount(e));
closeSideMenu.addEventListener("click", (e) => closeNavMenu(e));
openSideMenu.addEventListener("click", (e) => openNavMenu(e));
closeSearchBar.addEventListener("click", (e) => {
  searchBar.blur()
})