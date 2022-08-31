const newAddressBtn = document.querySelector(".add__new__address");
const newAddress = document.querySelector(".new__address");
const addNewAddressBtn = document.querySelector(".add__btn");
const addressContentContainer = document.querySelector(".address__content__container");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const street = document.querySelector("#street");
const building = document.querySelector("#building");
const flat = document.querySelector("#flat");

function toogleNewAddress(e) {
  console.log("clicked")
  newAddressBtn.classList.replace("open","close");
  newAddress.classList.replace("close", "open")
}
function addNewAddress() {
  let addressValue = address.value;
  let cityValue = city.value;
  let streetValue = street.value;
  let buildingValue = building.value;
  let flatValue = flat.value;
  let html = `<div class="address__content">
                <p class="address__text">
                  ${addressValue}
                </p>
                <input type="radio" name="address" class="check__address" />
              </div>`;
  addressContentContainer.innerHTML += html;
  newAddress.classList.replace("open", "close");
  addressContentContainer.classList.replace("close", "open");
  newAddressBtn.classList.replace("close","open")
  address.value = ""
  city.value = ""
  street.value = ""
  building.value = ""
  flat.value = ""
}

newAddressBtn.addEventListener("click", toogleNewAddress);
addNewAddressBtn.addEventListener("click", addNewAddress);
