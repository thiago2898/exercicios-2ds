const server = require('./controllers/tarefaController')

server.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000/")
})