const express = require("express")
const app = express()

const http = require("http")
const server = http.createServer(app)

const { Server } = require("socket.io")
const io = new Server(server)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

server.listen(3000, () => {
    console.log("Ouvindo porta 3000")
})