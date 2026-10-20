const lessonTitles = [
  "What is Share Market?",
  "NSE, BSE, NIFTY50 & SENSEX",
  "How to Buy and Sell Shares",
  "What is Candlestick?",
  "What is Timeframe?",
  "Support and Resistance",
  "How to Find Trend",
  "Breakout and Breakdown",
  "Trading Volume",
  "Moving Average",
  "RSI",
  "MACD",
  "Chart Pattern",
  "Intraday Trading",
  "Swing Trading",
  "Positional Trading",
  "Trading Psychology",
  "The Secrets No One Tells You"
];
const lessonList = document.getElementById("lesson-list");

if (lessonList) {
  lessonList.innerHTML = "";

  lessonTitles.forEach((title, i) => {
    const item = document.createElement("div");
    item.className = "lesson";
    item.innerHTML =
      `<span class="lesson-num">${String(i + 1).padStart(2, "0")}</span>
       <div>
         <div class="lesson-title"></div>
         <div class="lesson-sub">Chapter ${i + 1}</div>
       </div>`;

    item.querySelector(".lesson-title").textContent = title;
    lessonList.appendChild(item);
  });
}

const studentLessons = document.getElementById("student-lessons");

if (studentLessons) {
  studentLessons.innerHTML = "";

  lessonTitles.forEach((title, i) => {
    const button = document.createElement("button");
    button.className = "student-lesson";
    button.innerHTML =
      `<span class="lesson-num">${String(i + 1).padStart(2, "0")}</span><span></span>`;

    button.querySelector("span:last-child").textContent = title;

    button.addEventListener("click", () => {
      studentLessons.querySelectorAll(".student-lesson")
        .forEach(el => el.classList.remove("active"));

      button.classList.add("active");

      const playerTitle = document.getElementById("player-title");
      const playerCopy = document.getElementById("player-copy");

      if (playerTitle) playerTitle.textContent = title;

      if (playerCopy) {
        playerCopy.textContent =
          "Your Chapter " + (i + 1) +
          " video will appear here after video hosting is connected.";
      }
    });

    studentLessons.appendChild(button);
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


const buyButton = document.getElementById("buy-button");

if (buyButton) {
  buyButton.addEventListener("click", () => {
    window.location.href = "https://rzp.io/rzp/ayqvH4l8";
  });
}


if (buyButton) {
  buyButton.addEventListener("click", () => {
    alert(
      "Course price: ₹2,999. Online payment and student enrollment are not connected yet."
    );
  });
}
