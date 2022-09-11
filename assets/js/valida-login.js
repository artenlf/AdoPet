const button = document.getElementById("submit");
const addPreLoader = () => {
  button.innerHTML = '<img src="assets/img/loading.png" class="loading">';
};

const removePreLoader = () => {
  button.innerHTML = "Cadastrar";
};

const processaLogin = (evento) => {
  evento.preventDefault();
  addPreLoader();

  const email = document.querySelector("input[name=email]");
  const senha = document.querySelector("input[name=senha]");
  const campoErro = document.querySelector(".formulario__mensagem-erro");

  listaUsuarios = [];

  let validaUsuario = {
    nome: "",
    email: "",
    senha: "",
  };

  listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));

  listaUsuarios.forEach((usuario) => {
    if (email.value == usuario.emailCadastro && senha.value == usuario.senhaCadastro) {
      validaUsuario = {
        nome: usuario.nomeCadastro,
        email: usuario.emailCadastro,
        senha: usuario.senhaCadastro,
        telefone: "",
        cidade: "",
        sobre: "",
      };
    }
  });

  if (email.value == validaUsuario.email && senha.value == validaUsuario.senha) {
    campoErro.innerHTML = "";
    setTimeout(() => {
      window.location.href = "animais.html";
    }, 2500);

    // token para administrar acesso em áreas logadas. por enquanto não será utilizado.

    // let token = Math.random().toString(16).substr(2);
    // localStorage.setItem("token", token);
    localStorage.setItem("usuarioLogado", JSON.stringify(validaUsuario));
  } else {
    campoErro.innerHTML = "Usuário/Senha inválido(s)";
    email.setAttribute("style", "color: red");
    senha.setAttribute("style", "color: red");
    removePreLoader();
    email.focus();
  }
};

document.getElementById("formulario").addEventListener("submit", processaLogin);
