const taxaService = require('../services/taxaService')

describe('Testes para verificar a necessidade da aplicação de uma taxa para um valor', () => {
    test("Deve aplicar 5% de taxa para valores maiores que 500", () => {
        expect(taxaService(600)).toBe(630)
    })

    test("Não deve aplicar taxas para valores menores que 500", () => {
        expect(taxaService(400)).toBe(400)
    })
})