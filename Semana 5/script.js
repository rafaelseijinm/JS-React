// Classe Tarefa
class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'pendente';
    }

    concluir() {
        this.status = 'concluída';
    }

    detalhes() {
        return `Nome: ${this.nome}, Descrição: ${this.descricao}, Status: ${this.status}`;
    }
}

// Classe GerenciadorDeTarefas
class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas() {
        const listaTarefas = document.getElementById('listaTarefas');
        listaTarefas.innerHTML = '';

        this.tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${tarefa.status === 'concluída' ? 'task-done' : ''}">${tarefa.nome}</span>
                <button class="detalhes" onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                <button class="concluir" onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
                <button class="remover" onclick="gerenciador.removerTarefa(${index})">Remover</button>
            `;
            listaTarefas.appendChild(li);
        });
    }

    marcarComoConcluida(index) {
        this.tarefas[index].concluir();
        this.listarTarefas();
    }

    removerTarefa(index) {
        this.tarefas.splice(index, 1);
        this.listarTarefas();
    }

    visualizarDetalhes(index) {
        const tarefa = this.tarefas[index];
        alert(tarefa.detalhes());
    }
}

// Inicializando Gerenciador de Tarefas
const gerenciador = new GerenciadorDeTarefas();

document.getElementById('adicionarTarefa').addEventListener('click', () => {
    const nomeTarefa = document.getElementById('nomeTarefa').value;
    const descricaoTarefa = document.getElementById('descricaoTarefa').value;

    if (nomeTarefa && descricaoTarefa) {
        const tarefa = new Tarefa(nomeTarefa, descricaoTarefa);
        gerenciador.adicionarTarefa(tarefa);

        // Limpar os campos após adicionar
        document.getElementById('nomeTarefa').value = '';
        document.getElementById('descricaoTarefa').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
});
