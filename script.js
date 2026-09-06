console.log("connect");
const track = document.querySelector(".hero-track");
const dots = document.querySelectorAll(".slide-dots span");
console.log(dots);
// 指を置いた瞬間のⅹ座標
let startX = 0;
// 指を離した瞬間のⅹ座標
let endX = 0;
// 現在何枚目か
let currentIndex = 0;
dots[currentIndex].textContent = "●";
function showSlide() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
function rendedrDots() {
  dots.forEach((dot) => {
    dot.textContent = "○";
  });
  dots[currentIndex].textContent = "●";
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
    if (currentIndex < 5) {
      console.log("左スワイプ");
      currentIndex++;
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
      showSlide();
      rendedrDots();
    } else {
      currentIndex = 5;
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
