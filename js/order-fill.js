const actions = document.querySelectorAll(".order__action");
const tabsBody = document.querySelectorAll(".tab__body");

function toogleTabs(e) {
  actions.forEach(action => action.classList.remove("active__tab"))
  e.target.classList.add("active__tab")
  tabsBody.forEach(tab => {
    if (tab.classList.contains("open")) {
      console.log(tab)
      tab.classList.replace("open","close")
    }
  })
  const currentTabBody = document.querySelector(`.${e.target.textContent.toLowerCase().trim() + "__orders"}`)
  currentTabBody.classList.replace("close","open")
}

actions.forEach(action => action.addEventListener("click",(e) => toogleTabs(e)))