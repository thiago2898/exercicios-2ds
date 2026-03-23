let tarefas = []

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa)
}

function limparBanco() {
    tarefas = []
}

function totalTarefas() {
    return tarefas.length
}

module.exports = {
    adicionarTarefa,
    limparBanco,
    totalTarefas
}