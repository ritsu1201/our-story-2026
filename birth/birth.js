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
                document
                  .querySelector(".birth-content")
                  .classList.add("fade-out");
                setTimeout(() => {
                  document.querySelector(".birth-photo").classList.add("show");
                  setTimeout(() => {
                    const line1 = document.querySelector(".welcome-line1");
                    const line2 = document.querySelector(".welcome-line2");
                    const text1 = "Welcome";
                    const text2 = "to our family";
                    let i = 0;
                    let j = 0;
                    function writeWelcome() {
                      if (i < text1.length) {
                        line1.textContent += text1[i];
                        i++;
                        setTimeout(writeWelcome, 120);
                        return;
                      }
                      setTimeout(writeFamily, 300);
                    }
                    function writeFamily() {
                      if (j < text2.length) {
                        line2.textContent += text2[j];
                        j++;
                        setTimeout(writeFamily, 120);
                      }
                    }
                    writeWelcome();
                    setTimeout(() => {
                      document
                        .querySelector(".since-birth")
                        .classList.add("show");
                      setTimeout(() => {
                        document
                          .querySelector(".scroll-button")
                          .classList.add("show");
                      }, 1000);
                    }, 3000);
                  }, 1500);
                }, 800);
              }, 4000);
            }, 750);
          }, 1800);
        }, 2000);
      }, 1200);
    }, 1000);
  }
});
const birthDate = new Date("2026-09-15T05:52:00");
const daysNumber = document.querySelector(".days-number");
const hoursNumber = document.querySelector(".hours-number");
const minutesNumber = document.querySelector(".minutes-number");
const secondsNumber = document.querySelector(".seconds-number");
function updateSinceBirth() {
  const now = new Date();
  const diff = now - birthDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  daysNumber.textContent = days;
  hoursNumber.textContent = hours.toString().padStart(2, "0");
  minutesNumber.textContent = minutes.toString().padStart(2, "0");
  secondsNumber.textContent = seconds.toString().padStart(2, "0");
}
updateSinceBirth();
setInterval(updateSinceBirth, 1000);
