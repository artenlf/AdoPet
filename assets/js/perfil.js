let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
let nome = document.querySelector("#nome");

nome.placeholder = usuarioLogado.nome;
