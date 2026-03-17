const descontoService = require('../services/descontoService')

const descontoController = (req, res) => {
    const { value } = req.body

    const result = descontoService(value)

    return res.json({ valorFinal: result })
}

module.exports = descontoController