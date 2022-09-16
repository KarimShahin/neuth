const prevBtn = document.querySelector(".tab__prev__btn");
const nextBtn = document.querySelector(".tab__next__btn");
const sectionOne = document.querySelector(".section__one")
const sectionTwo = document.querySelector(".section__two")
let page = 1

nextBtn.addEventListener("click", () => {
  page++;
  if (page > 2) {
    page = 2;
  } else if (page === 2) {
    sectionOne.style.display = "none"
    sectionTwo.style.display = "flex"
    prevBtn.children[0].classList.remove("disabled")
    nextBtn.children[0].classList.add("disabled")
  }
})

prevBtn.addEventListener("click", () => {
  page--;
  if (page < 1) {
    page = 1;
  } else if (page === 1) {
    sectionTwo.style.display = "none"
    sectionOne.style.display = "flex"
    nextBtn.children[0].classList.remove("disabled")
    prevBtn.children[0].classList.add("disabled")
  }
})