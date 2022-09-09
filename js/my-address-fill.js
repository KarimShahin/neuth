const modals = document.querySelectorAll(".address__modal");
const moreBtns = document.querySelectorAll(".more__icon__container");

function toogleModal(e) {
  e.stopPropagation();
  if (e.target.children[0].children[0].classList.contains("close")) {
    modals.forEach(modal => {
      if (modal.classList.contains("open"))
        modal.classList.replace("open", "close")
    })
    e.target.children[0].children[0].classList.replace("close","open")
  } else {
    e.target.children[0].children[0].classList.replace("open","close")

  }
}

document.body.addEventListener("click", () => {
  modals.forEach(modal => {
    if (modal.classList.contains("open"))
      modal.classList.replace("open", "close");
  }
  )
})

moreBtns.forEach(btn => btn.addEventListener("click",e => toogleModal(e)))