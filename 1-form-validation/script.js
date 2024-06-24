const goBackButton = document.getElementById("go-back-button");

goBackButton.addEventListener("click", () => {
  window.location.replace("/");
});

const formInputs = document.querySelectorAll("[required]");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => inputValidation(input));
});

function validateCPF(input) {
  const cpf = input.value.replace(/\.|-/g, "");
  console.log(cpf);

  // VALIDAÇÃO DE NÚMEROS REPETIDOS
  const invalidCPF = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (
    invalidCPF.includes(cpf) ||
    firstDigitValidation(cpf) ||
    secondDigitValidation(cpf)
  ) {
    console.log("esse cpf nao existe");
  } else {
    console.log("esse cpf existe");
  }
}

function firstDigitValidation(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let i = 0; i < 9; i++) {
    soma += cpf[i] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[9];
}

function secondDigitValidation(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let i = 0; i < 10; i++) {
    soma += cpf[i] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma != cpf[10];
}

function inputValidation(input) {
  if (input.name == "cpf" && input.value.length >= 11) {
    validateCPF(input);
  }
}
