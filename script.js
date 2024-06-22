const projects = [
  {
    name: "Weather App",
    img: "1-weather-app/print.png",
    desc: "Um simples aplicativo que mostra o clima de qualquer local digitado em tempo real.",
    URL: "1-weather-app/index.html",
  },
];

const main = document.getElementById("main");

projects.map((project) => {
  const newCard = document.createElement("a");
  newCard.href = project.URL;
  newCard.classList.add("card");

  newCard.innerHTML = `<div class="image-box">
          <img src="${project.img}" alt="Print do projeto ${project.name}" />
        </div>
        <div class="text-content">
          <h2>${project.name}</h2>
          <p>
            ${project.desc}
          </p>
        </div>`;

  main.appendChild(newCard);
});
