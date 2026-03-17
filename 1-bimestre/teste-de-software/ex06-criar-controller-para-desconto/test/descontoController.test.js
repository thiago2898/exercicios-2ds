const descontoController = require('../controllers/descontoController')

test("Deve retornar um objeto do valor com o desconto", () => {
    const req = {
        body: { value: 200 }
    }

    const res = {
        json: jest.fn()
    }

    descontoController(req, res)

    expect(res.json).toHaveBeenCalledWith({ valorFinal: 180 })
})