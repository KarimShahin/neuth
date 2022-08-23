const registerTabs = Array(...document.querySelectorAll(".register__tab"))
const registerTabsBody = Array(...document.querySelectorAll(".register__tab__body"));

function makeTabActive(e) {
  registerTabs.map(tab => {
    tab.classList.remove("active")
  });
  registerTabsBody.map(tab => {
    tab.classList.remove("active");
  })
  e.target.classList.add("active");
  let elementClass = `.${e.target.classList[1]}__body`;
  let element = document.querySelector(elementClass);
  console.log(element,elementClass)
  element.classList.add("active");
}


registerTabs.map(tab => tab.addEventListener("click",e => makeTabActive(e)))
