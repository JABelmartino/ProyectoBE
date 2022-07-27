const express = require('express')
const Contenedor = require("./contenedor");

const contenedor = new Contenedor('./productos.txt')

const app = express()

app.get('/', (request, response) => {
    response.send('<h1>Hola mundo</h1>')
})

app.get('/productos', (request, response) => {
    contenedor.getAll().then(array => response.send(array))   
})

app.get('/productoRandom', (request, response) => {
    contenedor.getRandom().then(array => response.send(array))   
})

const PORT = 8080
const server = app.listen(8080, () =>{
    console.log(server.address().port)
})

server.on('error', err => console.log(err))