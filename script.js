console.log("connect");
const track = document.querySelector(".hero-track");
const photos = track.querySelectorAll("img");
const dots = document.querySelector(".slide-dots");
// 現在何枚目か
let currentIndex = 0;
function createDots(index) {
  const span = document.createElement("span");
  span.textContent = "〇";
  span.dataset.index = index;
  dots.appendChild(span);
}
// photo → 現在取り出している写真を入れる箱
// index → 現在取り出している写真の番号を入れる箱
photos.forEach((photo, index) => {
  createDots(index);
});
const spans = dots.querySelectorAll("span");
console.log();
// 指を置いた瞬間のⅹ座標
let startX = 0;
// 指を離した瞬間のⅹ座標
let endX = 0;
function showSlide() {
  // 画像たちが入った箱ごと負の方向に移動
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function rendedrDots() {
  spans.forEach((span) => {
    span.textContent = "○";
  });
  spans[currentIndex].textContent = "●";
}
// currentIndexと画像を接続
// //.hero-track に指が触れた瞬間、指のX座標を startX に保存する
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
// 指を離した瞬間のX座標を endX に保存する
track.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    if (currentIndex < photos.length - 1) {
      console.log("左スワイプ");
      currentIndex++;
      console.log(currentIndex);
      showSlide();
      rendedrDots();
    } else {
      currentIndex = 0;
      showSlide();
      rendedrDots();
    }
  }
  if (endX - startX > 50) {
    console.log("右スワイプ");
    if (currentIndex > 0) {
      currentIndex--;
      console.log(currentIndex);
      showSlide();
      rendedrDots();
    } else {
      currentIndex = photos.length - 1;
      showSlide();
      rendedrDots();
    }
  }
});
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("title")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      }
      if (entry.target.classList.contains("date")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      }
      if (entry.target.classList.contains("btn")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1300);
      }
    }
  });
});
reveals.forEach((reveal) => {
  observer.observe(reveal);
});
const exploreBtn = document.getElementById("explore-btn");
exploreBtn.addEventListener("click", () => {
  location.href = "story/story.html";
});
