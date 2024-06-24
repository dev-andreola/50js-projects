const formInputs = document.querySelectorAll("[required]");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => inputValidation(input));
});

function validateCPF(input) {
  const cpf = input.value.replace(/\.|-/g, "");
  console.log(cpf);
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

  if (invalidCPF.includes(cpf));
}

function inputValidation(input) {
  if (input.name == "cpf" && input.value.length >= 11) {
    validateCPF(input);
  }
}
