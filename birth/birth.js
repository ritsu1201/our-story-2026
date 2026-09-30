const time = document.querySelector(".time");
const labels = document.querySelector(".labels");
setTimeout(() => {
  time.classList.add("show");
}, 1000);

const start = Date.now();

const counter = setInterval(() => {
  const elapsed = Date.now() - start;
  const progress = Math.min(elapsed / 4000, 1);

  const totalSeconds = Math.floor(5 * 60 * 60 + 52 * 60 * progress);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  time.textContent =
    hours.toString().padStart(2, "0") +
    " : " +
    minutes.toString().padStart(2, "0") +
    " : " +
    seconds.toString().padStart(2, "0");

  if (progress === 1) {
    clearInterval(counter);
    labels.classList.add("show");
    setTimeout(() => {
      document.querySelector(".counter").classList.add("move-down");
      setTimeout(() => {
        document.querySelector(".birth-date").classList.add("show");
        document.querySelector(".and-then").classList.add("show");
        setTimeout(() => {
          document.querySelector(".counter").classList.add("move-down-2");
          document.querySelector(".birth-date").classList.add("move-down");
          setTimeout(() => {
            const sonWords = document.querySelectorAll(".son-title span");
            setTimeout(() => {
              sonWords[0].classList.add("show");
            }, 0);
            setTimeout(() => {
              sonWords[1].classList.add("show");
            }, 250);
            setTimeout(() => {
              sonWords[2].classList.add("show");
            }, 500);
            setTimeout(() => {
              sonWords[3].classList.add("show");
              setTimeout(() => {
                document.body.classList.add("bright");
                document.querySelector(".birth-content").classList.add("fade-out");
                setTimeout(() => {
                  document.querySelector(".birth-photo").classList.add("show");
                }, 800);
              }, 4000);
            }, 750);
          }, 1800);
        }, 2000);
      }, 1200);
    }, 1000);
  }
});
