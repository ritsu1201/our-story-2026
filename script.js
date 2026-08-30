console.log("connect");
const track = document.querySelector(".hero-track");
let startX = 0;
// 指を置いた瞬間のⅹ座標
let endX = 0;
// 指を離した瞬間のⅹ座標
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
}); 
//.hero-track に指が触れた瞬間、指のX座標を startX に保存する
track.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
});
// 指を離した瞬間のX座標を endX に保存する
