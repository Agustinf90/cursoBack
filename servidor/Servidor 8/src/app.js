import express from 'express'
import fs from 'fs'
import { parse } from 'path'
import Archivo from './container.js'
import ContenedorProds from './container2.js'





const productosFile = new Archivo()
const newProd = new ContenedorProds();

await productosFile.guardar('Yerba', 200, 'sdgasdga32')
await productosFile.guardar('Agua Tónica', 500, 'sdasd23gasdga32')

const items = JSON.parse(await productosFile.leer())

console.log(items)
const app = express()
const PORT = 8080;
app.use(express())
app.use(express.urlencoded({extended:true}))

const server = app.listen(PORT, () => {
    try {console.log(`listening to port ${PORT}`)}
    catch{console.log('Error')}
})

app.get('/api/productos/listar', async (req, res) => {
   res.send({items})
})

app.get('/api/productos/listar/:num', async (req, res) => {
    let {num} = req.params
     let parseNum = parseInt(num)
     let idNum = parseNum-1
     let ID = items[idNum]
    //  console.log(ID)
     if (!items[idNum]) return res.status(400).send({error: 'No existe ID'})
        res.send({ID})
 })

 app.get('/api/productos/guardar', async (req,res)=> {
    newProd.getAllProds()
    res.send(newProd);
})


 app.post('/api/productos/guardar', async (req,res)=> {
    let {title,price,thumbnail, id} = req.body;
    let prod =  newProd.saveProd({title, price, thumbnail, id})
    res.send({message:"Added prod"})
 })
