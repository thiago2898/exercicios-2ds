import { Router } from "express"

const produtosRota = Router()

const produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 }
]

produtosRota.get("/", (req, res) => {
    return res.json(produtos)
})

produtosRota.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const produtoEncontrado = produtos.find(p => p.id === id)

    if (!produtoEncontrado) {
        return res.status(404).json({ error: 'Produto não encontrado' })
    } else {
        return res.json(produtoEncontrado)
    }
})

produtosRota.post("/", (req, res) => {
    const {id, nome, preco} = req.body

    if (typeof id !== "number" || !nome || typeof preco !== "number") {
        return res.status(400).json({ message: "Erro ao criar produto"})
    }

    const existsCondition = produtos.some(product => product.id === id)

    if (existsCondition) {
        return res.status(409).json({ message: "Produto já existe" })
    }

    const novoProduto = {id, nome, preco}

    produtos.push(novoProduto)

    return res.status(200).json(novoProduto)
})

export default produtosRota