const lessonTitles = [
  "Introduction to the Stock Market",
  "How the Indian Stock Market Works",
  "Stocks, Exchanges and Market Participants",
  "Demat and Trading Accounts",
  "Order Types and Trading Basics",
  "Reading Candlestick Charts",
  "Support and Resistance",
  "Trend and Market Structure",
  "Understanding Volume",
  "Building a Stock Watchlist",
  "Stock Selection Checklist",
  "Planning an Entry",
  "Planning an Exit",
  "Stop-Loss and Risk-Reward",
  "Position Sizing and Capital Protection",
  "Trading Psychology and Discipline",
  "Creating Your Personal Trading Plan"
];

const lessonList = document.getElementById("lesson-list");

if (lessonList) {
  lessonTitles.forEach((title, i) => {
    const item = document.createElement("div");
    item.className = "lesson";
    item.innerHTML =
      `<span class="lesson-num">${String(i + 1).padStart(2, "0")}</span>
       <div><div class="lesson-title"></div>
       <div class="lesson-sub">Video chapter ${i + 1}</div></div>`;
    item.querySelector(".lesson-title").textContent = title;
    lessonList.appendChild(item);
  });
}

const studentLessons = document.getElementById("student-lessons");

if (studentLessons) {
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
      document.getElementById("player-title").textContent = title;
      document.getElementById("player-copy").textContent =
        "This lesson requires connected, protected video hosting and verified student enrollment.";
    });

    studentLessons.appendChild(button);
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const buyButton = document.getElementById("buy-button");

if (buyButton) {
  buyButton.addEventListener("click", () => {
    alert("Course checkout is not connected yet. Set up a payment gateway and secure student enrollment before accepting payments.");
  });
}
