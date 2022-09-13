// variable declaration
const tabs = Array(...document.querySelectorAll('.tab'));
const tabsBody = Array(...document.querySelectorAll('.tab__body'));
const chatBody = document.querySelector('.chat__body');
const chatBtn = document.querySelector('.live-chat__btn');
const promoModal = document.querySelectorAll(".onboard__modal");
const promoModalInner = document.querySelectorAll(".onboard__modal__inner")
const shareBtn = document.querySelectorAll(".share");
const menu = ["", "", ""]
var mySwiper = new Swiper('.swiper-container', {
	// If we need pagination
  // slidesPerView: 1,
  // slidesPerGroup: 1,
  direction: "horizontal",
	pagination: {
		el: '.swiper-pagination',
    clickable: true,
    // type: "bullet"
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + menu[index] + '</span>';
		},
	},
});

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
			slidesPerGroup: 1,
		},
		// when window width is >= 640px
		600: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		800: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		1000: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
const featuredSwiper = new Swiper('.featured-categories .swiper', {
	// Default parameters
	slidesPerView: 1,
	spaceBetween: 10,
	// Optional parameters
	direction: 'horizontal',
	slidesPerGroup: 3,
	// centeredSlidesBounds: true,
	// loop:true,
	// slidesOffsetAfter: 200,
	// slidesOffsetBefore:200,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// functions

function makeTabActive(e) {
	tabs.map((tab) => {
		tab.classList.remove('active');
	});
	tabsBody.map((tab) => {
		tab.classList.remove('active');
	});
	e.target.classList.add('active');
	let elementClass = `.${e.target.classList[1]}__body`;
	let element = document.querySelector(elementClass);
	element.classList.add('active');
}

function toogleChat() {
	if (chatBody.style.display === 'none') {
		chatBody.style.display = 'block';
	} else {
		chatBody.style.display = 'none';
	}
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("copy__input");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
} 

// page logic
tabs.map((tab) => {
	tab.addEventListener('click', (e) => makeTabActive(e));
});

document.body.addEventListener('click', (e) => {
	e.stopPropagation();
	chatBody.style.display = 'none';
});

chatBtn.addEventListener('click', (e) => {
	e.stopPropagation();
	toogleChat();
});
console.log(promoModal)
promoModal.forEach(modal => modal.addEventListener("click",()=> modal.classList.add("close")))
promoModalInner.forEach(modal => modal.addEventListener("click", (e) => e.stopPropagation()))

document.querySelector(".share__popup__modal").addEventListener("click", () => {
	document.querySelector(".share__popup__modal").style.display = "none"
})
document.querySelectorAll(".share__popup__modal__inner").forEach(modal => modal.addEventListener("click", (e) => {
	e.stopPropagation()
}))
document.querySelector("#copy__btn").addEventListener("click", () => {
	document.querySelector(".copy__text").style.display = "block";
	let timer = setTimeout(() => {
		document.querySelector(".copy__text").style.display = "none";
		clearTimeout(timer)
	},1000)
	copy()
});

shareBtn.forEach(btn => btn.addEventListener("click",() => document.querySelector(".share__popup__modal").style.display = "flex"))