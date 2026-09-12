console.log("connect");
// スクロールで表示する処理をまとめて取得
const reveals = document.querySelectorAll(".reveal");
// 画面内に入った要素を検知して表示アニメーションを実行
// 監視員を作り、仕事内容を設定
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 監視対象が画面と交錯していたら実行
    // 画面外にいても監視はしている。
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("date")) {
        // それぞれ時間差で表示されるようにする
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("head-title")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1500);
      } else if (entry.target.classList.contains("card1-title")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("card-1-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1200);
      } else if (entry.target.classList.contains("photo-date")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("location")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1400);
      } else if (entry.target.classList.contains("memory-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1800);
      } else if (entry.target.classList.contains("profile")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("ritsu-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("sara-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("see")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("see-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("card-date")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("card-location")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1200);
      } else if (entry.target.classList.contains("card-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1400);
      } else if (entry.target.classList.contains("kirihuri")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("kirihuri-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("ohira")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("ohira-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("tokyo")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("tokyo-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("dousei")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("dousei-img")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("ritsu-present")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("present-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("dousei-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("cooking-title")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("dousei1")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("dousei4")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 900);
      } else if (entry.target.classList.contains("dousei2")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("dousei3")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1100);
      } else if (entry.target.classList.contains("cooking-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1300);
      } else if (entry.target.classList.contains("outlet")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("outlet1-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("outlet-1")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("outlet2-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("outlet-2")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("outlet-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1200);
      } else if (entry.target.classList.contains("outlet-info")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 600);
      } else if (entry.target.classList.contains("valentine")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      } else if (entry.target.classList.contains("valentine-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      } else if (entry.target.classList.contains("valentine-date")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1000);
      } else if (entry.target.classList.contains("valentine-text")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1200);
      }
    }
  });
});
reveals.forEach((reveal) => {
  //   監視員に何を監視するのか指示する
  observer.observe(reveal);
});
const images = document.querySelectorAll(".modal-target");
const modalImg = document.querySelector(".modal-img");
const modal = document.querySelector(".modal");
// 現在の画像番号を取得する箱
let currentIndex = 0;
// サイト内の全imgに一つずつクリック処理を設定。
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    const touchImg = e.target.src;
    modalImg.src = touchImg;
    modal.classList.add("active");
    // imagesを配列にして触れた画像が何番目なのかを取得
    currentIndex = Array.from(images).indexOf(e.target);
    console.log("現在のindex:", currentIndex);
    // もしクリックされた画像が最初の画像なら～
    if (currentIndex === 0) {
      before.classList.add("none");
      before.disabled = true;
    }
    if (currentIndex === images.length - 1) {
      after.classList.add("none");
      after.disabled = true;
    }
  });
});
const cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  modal.classList.remove("active");
  before.classList.remove("none");
  after.classList.remove("none");
  before.disabled = false;
  after.disabled = false;
});
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-img")) {
    return;
  }
  if (e.target.id === "before") {
    return;
  }
  if (e.target.id === "after") {
    return;
  }
  modal.classList.remove("active");
  before.classList.remove("none");
  after.classList.remove("none");
  before.disabled = false;
  after.disabled = false;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("Escape");
    modal.classList.remove("active");
    before.classList.remove("none");
    after.classList.remove("none");
    before.disabled = false;
    after.disabled = false;
  }
});
const before = document.getElementById("before");
const after = document.getElementById("after");
before.addEventListener("click", (e) => {
  after.disabled = false;
  console.log("boforeボタンを押した瞬間の番号", currentIndex);
  // beforeボタンを押すときは最初の画像の次の画像であるため、
  // currentIndexが１の場合でnoneを追加している
  if (currentIndex === 1) {
    e.target.classList.add("none");
  }
  if (currentIndex === images.length - 1) {
    after.classList.remove("none");
  }
  currentIndex = currentIndex - 1;
  console.log("戻った画像の番号", currentIndex);
  modalImg.src = images[currentIndex].src;
  if (currentIndex === 0) {
    before.disabled = true;
  }
});
after.addEventListener("click", (e) => {
  console.log("afterをクリックした瞬間の番号", currentIndex);
  if (currentIndex === 0) {
    before.classList.remove("none");
  }
  if (currentIndex === images.length - 1) {
    after.disabled = true;
    after.classList.add("none");

    return;
  }
  before.disabled = false;
  currentIndex = currentIndex + 1;
  console.log("進んだ画像の番号", currentIndex);
  modalImg.src = images[currentIndex].src;
  if (currentIndex === images.length - 1) {
    after.disabled = true;
    after.classList.add("none");
    return;
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    before.click();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    after.click();
  }
});
let startX = 0;
let endX = 0;
// 現在のビューポートの横幅を取得
const screenWidth = window.innerWidth;
modal.addEventListener("touchstart", (e) => {
  console.log("タッチ");
  // 離した際に滑らかに動くようにした画像がそのままあると
  // 指の動きに合わせて画像が動く際に0.3sの遅れが出る可能性があるため、削除してる。
  modalImg.style.transition = "none";
  startX = e.touches[0].clientX;
});
modal.addEventListener("touchend", (e) => {
  // 画像が画面外に行って切り替わり戻てくるまでの処理を滑らかに
  modalImg.style.transition = "0.3s ease";
  endX = e.changedTouches[0].clientX;
  if (endX - startX > 100) {
    // 画像を画面外へ飛ばす
    modalImg.style.transform = `translateX(${screenWidth}px)`;
    // そのアニメーション(画面外に行ったら)が終わったら
    modalImg.addEventListener(
      "transitionend",
      () => {
        before.click();
        modalImg.style.transform = `translateX(0)`;
      },
      // transitionendを一回だけ実行し、
      // 実行後にリスナーを自動削除して重複実行を防ぐ
      { once: true },
    );
  } else if (endX - startX < -100) {
    modalImg.style.transform = `translateX(-${screenWidth}px)`;
    modalImg.addEventListener(
      "transitionend",
      () => {
        after.click();
        modalImg.style.transform = `translateX(0)`;
      },
      { once: true },
    );
  } else {
    modalImg.style.transform = `translateX(0)`;
  }
});
modal.addEventListener("touchmove", (e) => {
  // 現在触れているX座標
  const nowX = e.touches[0].clientX;
  console.log(e.touches[0].clientX);
  const moveX = nowX - startX;
  console.log("移動距離：", moveX);
  modalImg.style.transform = `translateX(${moveX}px)`;
});
