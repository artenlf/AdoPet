const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (evento) => {
    valida(evento.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove(".formulario__campo-invalido");
    input.parentElement.querySelector(".formulario__mensagem-erro").innerHTML = "";
    input.style.border = "none";
  } else {
    input.parentElement.classList.add(".formulario__campo-invalido");
    input.parentElement.querySelector(".formulario__mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input);
    input.style.border = "2px solid red";
  }
}

const validadores = {
  senha: (input) => validaSenha(input),
  confirmasenha: (input) => validaSenha(input),
};

const tiposDeErro = ["valueMissing", "typeMismatch", "patternMismatch", "customError"];

const mensagensDeErro = {
  nome: {
    valueMissing: "O campo nome não pode estar vazio.",
  },
  email: {
    valueMissing: "O campo e-mail não pode estar vazio.",
    typeMismatch: "O e-mail digitado não é válido.",
  },
  senha: {
    valueMissing: "O campo senha não pode estar vazio.",
    patternMismatch: "Senha de 6 a 12 caracteres, uma letra maiúscula, uma letra minúscula, um número.",
  },
  confirmasenha: {
    valueMissing: "O campo confirme sua senha não pode estar vazio.",
    customError: "As senhas digitadas devem ser iguais.",
  },
};

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = "";
  tiposDeErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro];
    }
  });
  return mensagem;
}

const senha = document.getElementById("senha");
const confirmaSenha = document.getElementById("confirmasenha");

senha.pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ ]).{6,12}$";

function validaSenha(input) {
  if (senha.value !== confirmaSenha.value) {
    confirmaSenha.setCustomValidity("As senhas não conferem.");
  } else {
    confirmaSenha.setCustomValidity("");
  }
}

senha.onchange = validaSenha;
confirmaSenha.onkeyup = validaSenha;
