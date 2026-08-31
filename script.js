console.log("connect");
const track = document.querySelector(".hero-track");
let startX = 0;
// 指を置いた瞬間のⅹ座標
let endX = 0;
// 指を離した瞬間のⅹ座標
let currentIndex = 0;
// 現在何枚目か
function showSlide() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// currentIndexと画像を接続
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});
//.hero-track に指が触れた瞬間、指のX座標を startX に保存する
track.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    if (currentIndex < 5) {
      console.log("左スワイプ");
      currentIndex++;
      showSlide();
    } else {
      currentIndex = 0;
      showSlide();
    }
  }
  if (endX - startX > 50) {
    console.log("右スワイプ");
    if (currentIndex > 0) {
      currentIndex--;
      showSlide();
    } else {
      currentIndex = 5;
      showSlide();
    }
  }
});
// 指を離した瞬間のX座標を endX に保存する
