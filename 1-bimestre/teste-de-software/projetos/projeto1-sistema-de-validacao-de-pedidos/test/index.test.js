const validarPedido = require('../index')

test("Validação de preço total", () => {
    const pedido = { cliente: "Carlos", total: 150, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido).pedido.total).toBeGreaterThan(0)
})

test("Verificando se há a propriedade cliente no pedido", () => {
    const pedido = { cliente: "Everson", total: 20, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido).pedido.cliente).toBeDefined()
})

test("Verificando se no pedido há uma lista de itens", () => {
    const pedido = { cliente: "Enzo", total: 300, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido).pedido.itens).toEqual(["Produto A", "Produto B"])
})

test("Validação de pedido", () => {
    const pedido = { cliente: "Helder", total: 200, itens: ["Produto A", "Produto B"]}
    expect(validarPedido(pedido).valid).toBeTruthy()
})