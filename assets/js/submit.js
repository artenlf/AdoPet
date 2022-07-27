const button = document.querySelector('button');

const addPreLoader = () => {
    button.innerHTML = '<img src="assets/img/loading.png"class="loading">'
}

const removePreLoader = () => {
    button.innerHTML = 'Cadastrar'
}

const processaSubmit = (evento) => {
    evento.preventDefault();
    addPreLoader();

    const nome = document.querySelector('input[name=nome]').value;
    const email = document.querySelector('input[name=email]').value;
    const senha = document.querySelector('input[name=senha]').value;
    const confirmasenha = document.querySelector('input[name=confirmasenha]').value;

    fetch('https://api.sheetmonkey.io/form/b3mfMkWQY4knHztCZ1ACSi', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ nome, email, senha, confirmasenha })
    }).then(() => removePreLoader());
};

document.querySelector('form').addEventListener('submit', processaSubmit);