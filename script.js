const projects = [
  {
    name: "Form Validation",
    img: "1-form-validation/assets/print.png",
    desc: "Simples formulário com sistema de validação de campos.",
    URL: "1-form-validation/index.html",
  },
  {
    name: "Digital Clock",
    img: "2-digital-clock/assets/print.png",
    desc: "Relógio digital com tema claro e escuro.",
    URL: "2-digital-clock/index.html",
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
