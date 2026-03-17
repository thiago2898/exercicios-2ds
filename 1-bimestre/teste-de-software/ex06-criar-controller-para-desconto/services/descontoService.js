function descontoService(valor) {
    if (valor > 100) {
        return valor * 0.9
    } else {
        return valor
    }
}

module.exports = descontoService