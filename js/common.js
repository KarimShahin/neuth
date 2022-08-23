const navbarTabs = Array(...document.querySelectorAll(".navbar__tab"))
const notificationIcon = document.querySelectorAll(".navbar__icon")[1];
const accountIcon = document.querySelectorAll(".navbar__icon")[4];
const notificationContent = document.querySelector(".notification__content");
const notificationCloseBtn = document.querySelector(".notification__close-btn");
const accountMenu = document.querySelector(".login-menu");

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

accountIcon.addEventListener("click", (e) => toogleAccount(e));