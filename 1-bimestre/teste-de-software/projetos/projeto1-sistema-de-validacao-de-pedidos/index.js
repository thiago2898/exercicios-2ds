function validarPedido(pedido) {
    let valid = false

    if (pedido.cliente && pedido.total > 0 && pedido.itens) {
        valid = true
    } else {
        valid = false
    }

    return {valid, pedido}
}

module.exports = validarPedido