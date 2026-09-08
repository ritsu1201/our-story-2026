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
    currentIndex = Array.from(images).indexOf(e.target);
    console.log("現在のindex:", currentIndex);
    // もしクリックされた画像が最初の画像なら～
    if (currentIndex === 0) {
      before.classList.add("none");
    }
  });
});
const cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  modal.classList.remove("active");
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
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("Escape");
    modal.classList.remove("active");
  }
});
const before = document.getElementById("before");
const after = document.getElementById("after");
before.addEventListener("click", (e) => {
  console.log(currentIndex);
  // beforeボタンを押すときは最初の画像の次の画像であるため、
  // currentIndexが１の場合でnoneを追加している
  if (currentIndex === 1) {
    e.target.classList.add("none");
  }
  currentIndex = currentIndex - 1;
  modalImg.src = images[currentIndex].src;
});
after.addEventListener("click", (e) => {
  console.log(currentIndex);
  currentIndex = currentIndex + 1;
  modalImg.src = images[currentIndex].src;
});
