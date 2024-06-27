const goBackButton = document.getElementById("go-back-button");

goBackButton.addEventListener("click", () => {
  window.location.replace("/");
});

let weekBox = document.querySelector(".weeks");
let container = document.querySelector(".container");
let toggleBtn = document.querySelector(".toggle-btn");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".min");
let second = document.querySelector(".sec");

let weeks = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

let num = 0;
let d = new Date();
let day = d.getDay();

let getTime = () => {
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  if (hr > 12) {
    hr = hr - 12;
    num = 1;
  }
  hr < 10 ? (hr = "0" + hr) : hr;
  min < 10 ? (min = "0" + min) : min;
  sec < 10 ? (sec = "0" + sec) : sec;

  hour.innerHTML = hr;
  minute.innerHTML = min;
  second.innerHTML = sec;

  let ampm = document.querySelectorAll(".ampm h6")[num];
  ampm.classList.add("curr-time-period");
};

setInterval(getTime, 1000);

let li = "";
let getWeeks = () => {
  weeks.forEach((week) => {
    li += `<span>${week}</span>`;
  });
  weekBox.innerHTML = li;
};

getWeeks();

let currDay = weekBox.querySelectorAll("span")[day];
currDay.classList.add("curr-day");

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    toggleBtn.style.background = "#fff";
    toggleBtn.style.color = "#272e38";
  } else {
    toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    toggleBtn.style.background = "#272e38";
    toggleBtn.style.color = "#fff";
  }
});
