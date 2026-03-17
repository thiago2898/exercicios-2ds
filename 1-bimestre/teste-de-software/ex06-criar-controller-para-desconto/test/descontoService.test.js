const descontoService = require('../services/descontoService')

test("Deve aplicar desconto de 10% para valores maiores que 100", () => {
    expect(descontoService(200)).toBe(180)
})