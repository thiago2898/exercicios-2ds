const cadastrarTarefa = require("../services/tarefaService")
const { adicionarTarefa, limparBanco, totalTarefas } = require("../database/tarefaDatabase.js")

beforeEach(() => {
    limparBanco()
})

test("O sistema deve permitir criar uma tarefa", () => {
    const tarefinha = {
        descricao: "Uma tarefa divertida."
    }

    expect(cadastrarTarefa(tarefinha.descricao)).toBeTruthy()
})

test("Uma tarefa não pode ser cadastrada sem descrição", () => {
    const tarefaSemDescricao = {}

    expect(cadastrarTarefa(tarefaSemDescricao.descricao)).toBeFalsy()
})

test("A função totalTarefas() deve retornar o total de tarefas do banco", () => {
    const tarefaDeTeste = {
        descricao: "Bla bla bla"
    }

    cadastrarTarefa(tarefaDeTeste.descricao)

    expect(totalTarefas()).toBe(1)
})

test("Sempre que os testes rodarem, o banco deve começar sem dados", () => {
    expect(totalTarefas()).toBe(0)
})