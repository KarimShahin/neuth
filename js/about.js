const videoPlayBtn = document.querySelector(".play__btn");
const videoPlayIcon = document.querySelector(".video__play__icon");
const video = document.querySelector(".video");

function playVideo(e) {
  video.removeAttribute("loop")
  videoPlayIcon.style.display = "none"
  video.play();
}

function videoReset(e) {
  video.removeAttribute("loop")
  videoPlayIcon.style.display = "block"
}

videoPlayBtn.addEventListener("click", (e) => playVideo(e));
videoPlayIcon.addEventListener("click", (e) => playVideo(e));
video.addEventListener("ended", e => videoReset(e));