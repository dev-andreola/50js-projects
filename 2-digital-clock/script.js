const goBackButton = document.getElementById("go-back-button");

goBackButton.addEventListener("click", () => {
  window.location.replace("/");
});

let weekBox = document.querySelector(".weeks");

let weeks = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

let li = "";
let getWeeks = () => {
  weeks.forEach((week) => {
    li += `<span>${week}</span>`;
  });
  weekBox.innerHTML = li;
};

getWeeks();
