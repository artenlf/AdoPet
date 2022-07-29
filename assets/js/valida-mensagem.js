const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {
        input.parentElement.classList.remove('.formulario__campo-invalido')
        input.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = '';
        input.style.border = 'none';
    } else {
        input.parentElement.classList.add('.formulario__campo-invalido');
        input.parentElement.querySelector('.formulario__mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
        input.style.border = '2px solid red';
    }
}

const validadores = {
    //telefone: input => validaTelefone(input),
    mensagem: input => mensagemSenha(input)
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
];

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    telefone: {
        valueMissing: 'O campo telefone não pode estar vazio.',
        typeMismatch: 'O telefone digitado não é válido.',
        //patternMismatch: 'O telefone digitado não é válido.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        customError: 'A mensagem deve conter ao menos 50 caracteres.'
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro];
        }
    })
    return mensagem;
}

const telefone = document.getElementById('telefone');

// telefone.pattern = "^\([1-9]{2}\) [9]{0,1}[6-9]{1}[0-9]{3}\-[0-9]{4}$"

const mensagem = document.getElementById('mensagem');

function validaMensagem(input) {
    if (mensagem.length < 50) {
        mensagem.setCustomValidity('A mensagem deve conter ao menos 50 caracteres.');
    } else {
        mensagem.setCustomValidity('');
    }
}

mensagem.onchange = validaMensagem;
mensagem.onkeyup = validaMensagem;





// ------------------ submit ---------------------------
const addPreLoader = () => {
    const button = document.getElementById('submit');

    button.innerHTML = '<img src="assets/img/loading.png"class="loading">'
}

document.getElementById('formulario').addEventListener('submit', addPreLoader);
