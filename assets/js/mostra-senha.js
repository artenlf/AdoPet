const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmasenha');

senhaInput.addEventListener('click', evento => {
    let inputEhSenha = senhaInput.type == 'password';

    if (inputEhSenha) {
        mostraSenha();
    } else {
        ocultaSenha();
    }
});

confirmaSenhaInput.addEventListener('click', evento => {
    let inputEhSenha = confirmaSenhaInput.type == 'password';

    if (inputEhSenha) {
        mostraSenha();
    } else {
        ocultaSenha();
    }
});

function mostraSenha() {
    senhaInput.setAttribute('type', 'text');
    confirmaSenhaInput.setAttribute('type', 'text');
};

function ocultaSenha() {
    senhaInput.setAttribute('type', 'password');
    confirmaSenhaInput.setAttribute('type', 'password');
};