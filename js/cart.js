const deleteBtn = document.querySelectorAll(".delete__btn");
const deleteBtnIcon = document.querySelectorAll(".delete__btn__icon");
const chooseSample = document.querySelector(".choose__sample");
const selectSampleBtn = document.querySelector(".select__sample__btn") 
const chooseSampleContainer = document.querySelector(".choose__sample__container")
const closeBtn = document.querySelector(".close__btn")
const sampleInputs = document.querySelectorAll(".sample__input")
const addBtns = document.querySelectorAll(".add__btn")
const editSampleBtn = document.querySelector(".edit__sample__btn")
const plusBtns = document.querySelectorAll(".plus__btn");
const minusBtns = document.querySelectorAll(".minus__btn");
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
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

deleteBtn.forEach(btn => btn.addEventListener("mouseenter", (e) => {
  e.stopPropagation()
  e.target.children[0].setAttribute("src","../assets/neuth icons/delete-w.svg")
}))

deleteBtn.forEach(btn => btn.addEventListener("mouseleave", (e) => {
  e.target.children[0].setAttribute("src","../assets/neuth icons/delete.svg")
}))

selectSampleBtn?.addEventListener("click", (e) => {
  chooseSample.classList.replace("close","open")
})

editSampleBtn?.addEventListener("click", e => {
  chooseSample.classList.replace("close","open")
})

chooseSample.addEventListener("click", (e) => {
  chooseSample.classList.replace("open", "close");
})

chooseSampleContainer.addEventListener("click", (e) => {
  e.stopPropagation()
})

closeBtn.addEventListener("click", (e) => {
  chooseSample.classList.replace("open", "close");
})

sampleInputs.forEach(input => input.addEventListener("change", e => {
  console.log(e.target.checked);
  if (e.target.checked) {
    sampleInputs.forEach((input,index) => {
      if (input !== e.target) {
        input.checked = false;
        addBtns[index].classList.add("disabled")
      } else {
        addBtns[index].classList.remove("disabled")
      }
    })
  }
}))

plusBtns.forEach(btn => btn.addEventListener("click",(e) => {
  e.stopPropagation()
  if (e.target.tagName === "IMG")
    e.target.parentElement.previousElementSibling.value = Number(e.target.parentElement.previousElementSibling.value) + 1
  else if (e.target.tagName === "A")
    e.target.previousElementSibling.value = Number(e.target.previousElementSibling.value) + 1
}))

minusBtns.forEach(btn => btn.addEventListener("click",(e) => {
  e.stopPropagation()
  if (e.target.tagName === "IMG") {
    if(Number(e.target.parentElement.nextElementSibling.value) > 1)
      e.target.parentElement.nextElementSibling.value = Number(e.target.parentElement.nextElementSibling.value) - 1
  }
  else if (e.target.tagName === "A") {
    if(Number(e.target.nextElementSibling.value) > 1)
      e.target.nextElementSibling.value = Number(e.target.nextElementSibling.value) - 1
  }
}))
