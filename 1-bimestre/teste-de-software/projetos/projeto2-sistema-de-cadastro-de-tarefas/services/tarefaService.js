const { adicionarTarefa } = require('../database/tarefaDatabase')

function cadastrarTarefa(descricao) {
    if (!descricao) {
        return false
    }

    const tarefa = { descricao }

    adicionarTarefa(tarefa)
    
    return true
}

module.exports = cadastrarTarefa