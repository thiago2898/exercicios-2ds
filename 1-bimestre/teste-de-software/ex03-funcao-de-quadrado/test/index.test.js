const calcularQuadrado = require('../index')

test("Calcular o quadrado de um número", () => {
    expect(calcularQuadrado(5)).toBe(25)
})