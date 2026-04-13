const subtrair = require('../src/index')

describe('Função subtrair', () => {
    test('Deve retornar 3 quando subtrair 5 por 2', () => {
        expect(subtrair(5, 2)).toBe(3)
    })

    test('Deve retornar 5 quando subtrair 10 por 5', () => {
        expect(subtrair(10, 5)).toBe(5)
    })
})