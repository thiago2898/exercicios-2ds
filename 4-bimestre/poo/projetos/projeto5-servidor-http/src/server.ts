import http from "http"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 3000

const server  = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain; charset: utf-8"})

    res.end(`Servidor rodando para John, idade 34!`)
})

server.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}/`)
})

server.close(() => {
  console.log("Servidor encerrado.")
})

export default server
