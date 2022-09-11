let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let nome = document.getElementById("nome");
let telefone = document.getElementById("telefone");
let cidade = document.getElementById("cidade");
let sobre = document.getElementById("sobre");

nome.placeholder = usuarioLogado.nome;

const salvar = (evento) => {
  evento.preventDefault();

  let novosDados = {
    nome: usuarioLogado.nome,
    email: usuarioLogado,
    senha: usuarioLogado.senha,
    telefone: telefone.value,
    cidade: cidade.value,
    sobre: sobre.value,
  };

  localStorage.setItem("usuarioLogado", JSON.stringify(novosDados));
};

telefone.placeholder = usuarioLogado.telefone;
cidade.placeholder = usuarioLogado.cidade;
sobre.placeholder = usuarioLogado.sobre;

document.getElementById("formulario").addEventListener("submit", salvar);
