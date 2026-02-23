const validarPedido = require('../index')

test("Validação de preço total", () => {
    const pedido = { cliente: "Carlos", total: 150, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido)).toBeTruthy()
})

test("Verificando se há a propriedade cliente no pedido", () => {
    const pedido = { cliente: "Everson", total: 20, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido)).toBeTruthy()
})

test("Verificando se no pedido há uma lista de itens", () => {
    const pedido = { cliente: "Enzo", total: 100, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido)).toBeTruthy()
})

test("Validação de pedido", () => {
    const pedido = { cliente: "Helder", total: 200, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido)).toBeTruthy()
})
