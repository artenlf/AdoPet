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

const tiposDeErro = [
    'valueMissing',
    'customError'
];

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    telefone: {
        valueMissing: 'O campo telefone não pode estar vazio.',
        customError: 'O campo de telefone deve ser preenchido corretamente.'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio.',
        customError: 'A mensagem deve conter pelo menos 50 caracteres.'
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

// ----------------- validação do telefone ------------------

const mascaraTelefone = {
    telefone(value) {
        validaTelefone();
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(\d{4})\d+?$/, '$1')
    }
};

const telefone = document.getElementById('telefone')
const telefoneCampo = telefone.dataset.tipo;

telefone.addEventListener('input', (evento) => {
    evento.target.value = mascaraTelefone[telefoneCampo](evento.target.value);
});

function validaTelefone(input) {
    if (telefone.value.length >= 14) {
        telefone.setCustomValidity('');
    } else {
        telefone.setCustomValidity('Deve conter de 8 a 9 dígitos');
    }
};

// --------------- validação caracteres campo mensagem -------------

const campoMensagem = document.getElementById('mensagem');

campoMensagem.addEventListener('input', (evento) => {
    console.log(campoMensagem.value.length);
    if (campoMensagem.value.length > 50) {
        campoMensagem.setCustomValidity('');
    } else {
        campoMensagem.setCustomValidity(`Deve conter pelo menos 50 caracteres. Faltam ${(50-campoMensagem.value.length)} caracteres.`)
    }
})

// ------------------ submit ---------------------------

const addPreLoader = () => {
    const button = document.getElementById('submit');

    button.innerHTML = '<img src="assets/img/loading.png"class="loading">'
}

document.getElementById('formulario').addEventListener('submit', addPreLoader);
