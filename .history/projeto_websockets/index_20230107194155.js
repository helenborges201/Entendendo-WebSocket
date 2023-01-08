const { Socket } = require("dgram")
const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

io.on("connection", (socket) => {
    console.log("Alguem se conectou com o id " + socket.id)
})

function gerarValor() {
    return (Math.random() * 100).toFixed(2)
}

setInterval(() => {
    io.emit("cotação", gerarValor)
}, 1000)


server.listen(3000, () => {
    console.log("Ouvindo porta 3000")
})