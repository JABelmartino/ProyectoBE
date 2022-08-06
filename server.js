const express = require('express')
const { Router } = express
const Contenedor = require("./contenedor");

const contenedor = new Contenedor('./productos.txt')

const app = express()
const routerProductos = Router()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));

const arrayProductos = []
///-Productos-///
routerProductos.get('/', async (req, res) => {
    const productos = await contenedor.getProductos()
    res.json({
        productos
    })
})

routerProductos.get('/:id', async (req, res) => {
    const {id} = req.params
    const elegido = await contenedor.getId(id)
    if(elegido){
     res.json({elegido})
    }else{
        return {error:'No existe'}
    }
 })

routerProductos.post('/', async (req, res) => {
    const {id} = req.params
    const {title,price,thumbnail} = req.body
    const producto = {id,title,price,thumbnail}
    const agregado = await contenedor.postProducto(producto)
    res.json({
        agregado
    })
})

routerProductos.put('/:id', (req, res) => {
    const {id} = req.params
    const {title,price,thumbnail} = req.body
    const obj = {id,title,price,thumbnail}
    const actualizado = contenedor.updateById(obj)
    res.json({
        actualizado
    })
})

routerProductos.delete('/:id',async (req, res) => {
    const {id} = req.params
    const borrado = await contenedor.deleteById(id)   
    res.json({
           borrado
        })
})



app.use('/api/productos', routerProductos)





const server = app.listen(8080, () =>{
    console.log(server.address().port)
})

server.on('error', err => console.log(err))