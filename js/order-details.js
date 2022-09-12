const dropmenuTitles = document.querySelectorAll(".dropmenu__title");
const dropmenuIcons = document.querySelectorAll(".dropmenu__icon");
const dropmenuBodies = document.querySelectorAll(".dropmenu__body")
const cancelBtn = document.querySelector(".cancel__btn");
const cancelModal = document.querySelector(".cancel__modal__container");
const cancelModalInner = document.querySelector(".cancel__modal");
const noBtn = document.querySelector(".no__btn");

function toogleDropmenu(index) {
  if (dropmenuBodies[index].classList.contains("open__body")) {
    dropmenuIcons[index].classList.remove("open__icon");
    dropmenuBodies[index].classList.remove("open__body")
  } else {
    dropmenuIcons[index].classList.add("open__icon");
    dropmenuBodies[index].classList.add("open__body")

  }
}

dropmenuTitles.forEach((title, index) => {
  title.addEventListener("click", () => toogleDropmenu(index))
})

cancelBtn.addEventListener("click", () => {
  cancelModal.classList.replace("close", "open__body")
})

cancelModal.addEventListener("click", () => {
  cancelModal.classList.replace("open__body","close")
})
noBtn.addEventListener("click", () => {
  cancelModal.classList.replace("open__body","close")
})

cancelModalInner.addEventListener("click",(e)=> e.stopPropagation())