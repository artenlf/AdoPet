let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let cidade = document.getElementById("cidade");
let sobre = document.getElementById("sobre");

nome.placeholder = usuarioLogado.nome;

let perfil = {
  ...usuarioLogado,
  telefone: "",
  cidade: "",
  sobre: "",
};

localStorage.setItem("perfil", JSON.stringify(perfil));

const salvar = (evento) => {
  evento.preventDefault();
};

document.getElementById("formulario").addEventListener("submit", salvar);
