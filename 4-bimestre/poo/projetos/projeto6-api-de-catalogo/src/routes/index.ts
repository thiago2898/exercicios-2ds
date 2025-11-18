import { Router } from "express"
import produtosRota from "./produtos"

const rota = Router()

rota.use("/produtos", produtosRota)

rota.get("/", (req, res) => {
    return res.json({ nome: "Botei", idade: 15})
})

export default rota