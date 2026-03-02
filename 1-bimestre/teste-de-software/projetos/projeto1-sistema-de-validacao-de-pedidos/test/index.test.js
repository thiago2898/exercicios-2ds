const validarPedido = require('../index')

test("Pedido com total 0 deve retornar false", () => {
    const pedido = { cliente: "Carlos", total: 0, itens: ["Produto A", "Produto B"] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Pedido sem cliente deve retornar false", () => {
    const pedido = { total: 20, itens: ["Produto A", "Produto B"] }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Pedido sem itens deve retornar false", () => {
    const pedido = { cliente: "Enzo", total: 100 }
    expect(validarPedido(pedido)).toBeFalsy()
})

test("Pedido válido deve retornar true", () => {
    const pedido = {cliente: "Carlos", total: 150, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido)).toBeTruthy()
})
