const goBackButton = document.getElementById("go-back-button");

goBackButton.addEventListener("click", () => {
  window.location.replace("/");
});

const formInputs = document.querySelectorAll("[required]");
const formButton = document.getElementById("submit");

formInputs.forEach((input) => {
  input.addEventListener("blur", () => inputValidation(input));
  input.addEventListener("invalid", (e) => e.preventDefault());
});

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const errorMessages = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caracteres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "Por favor, preencha um CPF válido.",
    tooShort: "O campo de CPF não tem caracteres suficientes.",
  },
  birthday: {
    valueMissing: "O campo de data não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos.",
  },
  term: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar.",
  },
};

function validateCPF(input) {
  const cpf = input.value.replace(/\.|-/g, "");

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
    !firstDigitValidation(cpf) ||
    !secondDigitValidation(cpf)
  ) {
    input.setCustomValidity("Por favor, preencha um CPF válido.");
  } else {
    input.setCustomValidity("");
  }
}

function firstDigitValidation(cpf) {
  let soma = 0;
  let multiplicador = 10;

  for (let tamanho = 0; tamanho < 9; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma == cpf[9];
}

function secondDigitValidation(cpf) {
  let soma = 0;
  let multiplicador = 11;

  for (let tamanho = 0; tamanho < 10; tamanho++) {
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
  }

  soma = (soma * 10) % 11;

  if (soma == 10 || soma == 11) {
    soma = 0;
  }

  return soma == cpf[10];
}

function validateAge(input) {
  const birthday = new Date(input.value);
  const actualDate = new Date();
  const majority = new Date(
    birthday.getUTCFullYear() + 18,
    birthday.getUTCMonth(),
    birthday.getUTCDate()
  );

  if (!(actualDate >= majority)) {
    input.setCustomValidity("O usuário não é maior de idade");
  } else {
    input.setCustomValidity("");
  }
}

function inputValidation(input, showAllErrors = false) {
  if (!showAllErrors) {
    formInputs.forEach((input) => {
      input.classList.remove("error-border");
      const errorMessageOutput =
        input.parentNode.querySelector(".error-message");
      if (errorMessageOutput) {
        errorMessageOutput.textContent = "";
      }
    });
  }

  let message = "";
  input.setCustomValidity("");

  if (input.name == "cpf" && input.value.length >= 11) {
    validateCPF(input);
  }

  if (input.name == "birthday" && input.value !== "") {
    validateAge(input);
  }

  errorTypes.forEach((error) => {
    if (input.validity[error]) {
      message = errorMessages[input.name][error];
    }
  });

  const errorMessageOutput = input.parentNode.querySelector(".error-message");
  const inputValidator = input.checkValidity();

  if (!inputValidator) {
    errorMessageOutput.textContent = message;
    errorMessageOutput.classList.add("error-message");
    input.classList.add("error-border");
  } else {
    errorMessageOutput.textContent = "";
  }
}

formButton.addEventListener("click", () => {
  let allValid = true;
  formInputs.forEach((input) => {
    inputValidation(input, true);
    if (!input.checkValidity()) {
      allValid = false;
    }
  });
  if (allValid) {
    alert("Cadastro feito com sucesso!");
  }
});
