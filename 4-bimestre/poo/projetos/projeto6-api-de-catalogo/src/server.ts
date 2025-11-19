import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import rotas from './routes';
import path from 'path';

dotenv.config()

const server = express()

const port = process.env.PORT || 3000

server.use(helmet())

server.use(express.json())

server.use(express.urlencoded({ extended: true }))

server.use(express.static(path.join(__dirname, "..", "public")))

server.use("/", rotas)


server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})

export default server