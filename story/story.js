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
      } else if (entry.target.classList.contains("title")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 1500);
      } else if (entry.target.classList.contains("card-1")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
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
      }
      else if (entry.target.classList.contains("profile")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 500);
      }
      else if (entry.target.classList.contains("ritsu-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      }
      else if (entry.target.classList.contains("sara-card")) {
        setTimeout(() => {
          entry.target.classList.add("active");
        }, 800);
      }
    }
  });
});
reveals.forEach((reveal) => {
  //   監視員に何を監視するのか指示する
  observer.observe(reveal);
});
