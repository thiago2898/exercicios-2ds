import { Router } from "express"
import produtosRota from "./produtos"

const rota = Router()

rota.use("/produtos", produtosRota)

rota.get("/ping", (req, res) => {
    return res.status(200).json({ pong: true })
})

rota.get("/", (req, res) => {
    return res.json({ nome: "Botei", idade: 15})
})

export default rota