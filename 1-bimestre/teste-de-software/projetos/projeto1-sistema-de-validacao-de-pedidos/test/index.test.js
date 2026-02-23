const validarPedido = require('../index')

test("Validar se o preço total do pedido é maior que 0", () => {
    const pedido = { cliente: "Carlos", total: 150, itens: ["Produto A", "Produto B"] }
    expect(validarPedido(pedido)).toBeTruthy()
})

test("Invalidar pedido sem cliente", () => {
    const pedido = { total: 20, itens: ["Produto A", "Produto B"] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Invalidar pedido sem lista", () => {
    const pedido = { cliente: "Enzo", total: 100 }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Invalidar pedido", () => {
    const pedido = { }
    expect(validarPedido(pedido)).toBeFalsy()
})
