const botaoVerSenha = document.getElementById("verSenha");
const botaoVerConfirmaSenha = document.getElementById("verConfirmaSenha");

botaoVerSenha.addEventListener("click", (evento) => {
  const senhaInput = document.getElementById("senha");

  if (senhaInput.getAttribute("type") == "password") {
    senhaInput.setAttribute("type", "text");
  } else {
    senhaInput.setAttribute("type", "password");
  }
});

botaoVerConfirmaSenha.addEventListener("click", (evento) => {
  const confirmaSenhaInput = document.getElementById("confirmasenha");

  if (confirmaSenhaInput.getAttribute("type") == "password") {
    confirmaSenhaInput.setAttribute("type", "text");
  } else {
    confirmaSenhaInput.setAttribute("type", "password");
  }
});
