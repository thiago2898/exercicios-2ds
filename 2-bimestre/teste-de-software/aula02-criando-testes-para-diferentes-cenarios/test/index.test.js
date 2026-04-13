const login = require('../src/index')

describe('Função login', () => {
    test('Deve retornar true para login válido', () => {
        const user = {
            usuario: 'admin',
            senha: '123'
        }

        expect(login(user.usuario, user.senha)).toBe(true)
    })

    test('Deve retornar false para senha incorreta', () => {
        const user = {
            usuario: 'admin',
            senha: '321'
        }

        expect(login(user.usuario, user.senha)).toBe(false)
    })

    test('Deve retornar false para usuário incorreto', () => {
        const user = {
            usuario: 'user',
            senha: '123'
        }

        expect(login(user.usuario, user.senha)).toBe(false)
    })

    test('Deve retornar false quando dados não forem informados', () => {
        const user = {
            usuario: null,
            senha: null
        }

        expect(login(user.usuario, user.senha)).toBe(false)
    })
})