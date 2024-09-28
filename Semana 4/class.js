class Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.telefoneFixo = telefoneFixo;
        this.celular = celular;
    }

    validarCampo(campo, regex, mensagemErro) {
        const valor = campo.value.trim();
        const erro = campo.nextElementSibling;
        if (!regex.test(valor)) {
            erro.textContent = mensagemErro;
            erro.style.display = 'block';
            return false;
        }
        erro.style.display = 'none';
        return true;
    }
}

class Aluno extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matriculaAluno, cursoAluno) {
        super(nome, email, dataNascimento, telefoneFixo, celular);
        this.matriculaAluno = matriculaAluno;
        this.cursoAluno = cursoAluno;
    }
}

class Professor extends Pessoa {
    constructor(nome, email, dataNascimento, telefoneFixo, celular, matriculaProfessor, areaProfessor) {
        super(nome, email, dataNascimento, telefoneFixo, celular);
        this.matriculaProfessor = matriculaProfessor;
        this.areaProfessor = areaProfessor;
    }
}