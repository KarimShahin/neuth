const productsBtn = document.querySelector(".portion__title");
const productsArrow = document.querySelector(".arrow__up__icon");
const productsBody = document.querySelector(".portion__content");
const paymentMethod = Array(...document.querySelectorAll("input[type='radio']"));

function toogleProducts() {
  console.log("clicked")
  if (productsArrow.classList.contains("rotate")) {
    productsArrow.classList.remove("rotate");
    productsBody.style.display = "flex"
    productsBtn.style.paddingBottom = "1rem";
  } else {
    productsArrow.classList.add("rotate")
    productsBody.style.display = "none"
    productsBtn.style.paddingBottom = "0";
  }
}

function showActive(e) {
  paymentMethod.map(method => {
    if (method.checked) {
      method.parentElement.classList.add("active")
    } else {
      method.parentElement.classList.remove("active")
    }
  })
}

productsBtn.addEventListener("click", toogleProducts);
paymentMethod.map(method => method.addEventListener("click", showActive));