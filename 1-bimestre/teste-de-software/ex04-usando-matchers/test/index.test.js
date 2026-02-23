test("5 é maior que 3", () => {
    expect(5).toBeGreaterThan(3)
})

test(`"Teste de Software" contém a palavra "Software"`, () => {
    expect("Teste de Software").toContain("Software")
})

test("Um objeto { aprovado: True } é igual ao esperado", () => {
    const aluno = { aprovado: true }
    expect(aluno).toEqual({ aprovado: true })
})