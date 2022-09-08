const button = document.getElementById("submit");
const addPreLoader = () => {
  button.innerHTML = '<img src="assets/img/loading.png" class="loading">';
};

const removePreLoader = () => {
  button.innerHTML = "Cadastrar";
};

const processaSubmit = (evento) => {
  evento.preventDefault();
  addPreLoader();

  const nome = document.querySelector("input[name=nome]").value;
  const email = document.querySelector("input[name=email]").value;
  const senha = document.querySelector("input[name=senha]").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

  usuarios.push({
    nomeCadastro: nome,
    emailCadastro: email,
    senhaCadastro: senha,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2500);
};

document.getElementById("formulario").addEventListener("submit", processaSubmit);
