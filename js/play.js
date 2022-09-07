const closeBtn = document.querySelector(".close__btn");
const triesFinishedModal = document.querySelector(".tries__finished__modal");

closeBtn.addEventListener("click", () => {
  triesFinishedModal.parentElement.classList.replace("open", "close");
})