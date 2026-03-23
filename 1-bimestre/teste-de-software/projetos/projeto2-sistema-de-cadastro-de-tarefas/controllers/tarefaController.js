const cadastrarTarefa = require('../services/tarefaService')

function descreverTarefa(req, res) {
    const { descricao } = req.body

    const tarefaDescrita = cadastrarTarefa(descricao)

    return res.json({ tarefaDescrita })
}

module.exports = descreverTarefa