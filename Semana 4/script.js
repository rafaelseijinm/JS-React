document.querySelectorAll('input[name="tipoPessoa"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const isAluno = this.value === 'aluno';
        
        document.querySelectorAll('.aluno-only').forEach(el => {
            el.style.display = isAluno ? 'block' : 'none';
        });

        document.querySelectorAll('.professor-only').forEach(el => {
            el.style.display = isAluno ? 'none' : 'block';
        });
    });
});
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', function() {
        validarCampo(this);
    });
});
function validarCampo(campo) {
    const id = campo.id;
    const valor = campo.value.trim();
    let regex = /.*/; // Regex padrão (aceita tudo)
    let mensagemErro = '';

    switch (id) {
        case 'nome':
            regex = /^[a-zA-Z\s]+$/;
            mensagemErro = 'Nome deve conter apenas letras e espaços.';
            break;
        case 'email':
            regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            mensagemErro = 'Email inválido.';
            break;
        case 'matriculaAluno':
            regex = /^\d{10}$/;
            mensagemErro = 'Matrícula Aluno deve ter 10 dígitos.';
            break;
        case 'matriculaProfessor':
            regex = /^\d{5}$/;
            mensagemErro = 'Matrícula Professor deve ter 5 dígitos.';
            break;
    }

    const erro = campo.nextElementSibling;
    if (!regex.test(valor)) {
        erro.textContent = mensagemErro;
        erro.style.display = 'block';
        return false;
    } else {
        erro.style.display = 'none';
        return true;
    }
}
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    document.querySelectorAll('input').forEach(input => {
        if (!validarCampo(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        const pessoa = criarObjetoPessoa();
        console.log(pessoa); // Aqui você pode enviar os dados ou armazená-los
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha todos os campos corretamente.');
    }
});

function criarObjetoPessoa() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const telefoneFixo = document.getElementById('telefoneFixo').value;
    const celular = document.getElementById('celular').value;

    const tipoPessoa = document.querySelector('input[name="tipoPessoa"]:checked').value;
    
    if (tipoPessoa === 'aluno') {
        const matriculaAluno = document.getElementById('matriculaAluno').value;
        const cursoAluno = document.getElementById('cursoAluno').value;
        return new Aluno(nome, email, dataNascimento, telefoneFixo, celular, matriculaAluno, cursoAluno);
    } else {
        const matriculaProfessor = document.getElementById('matriculaProfessor').value;
        const areaProfessor = document.getElementById('areaProfessor').value;
        return new Professor(nome, email, dataNascimento, telefoneFixo, celular, matriculaProfessor, areaProfessor);
    }
}