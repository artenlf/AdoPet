const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmasenha');

function validaSenha() {
    if (senha.value !== confirmaSenha.value) {
        confirmaSenha.setCustomValidity('As senhas digitadas devem ser iguais.');        
    } else {
        confirmaSenha.setCustomValidity('');
    }
}

senha.onchange = validaSenha;
confirmaSenha.onkeyup = validaSenha;
