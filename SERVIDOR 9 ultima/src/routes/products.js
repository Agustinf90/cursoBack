import express from "express";
import { uploader } from "../utils.js";
import fs from 'fs'

const router = express.Router();
const admin = true;

let productos = []

const idProds = () => {
    let ids = 0
    productos?.forEach(producto => {
        if(producto.id > ids) {
            ids = producto.id
        }
    })
    return ids
}


const miMiddleware = (req,res,next)=> {
    if (!admin) return res.status(400).send({error: 'No tienes autorización'});
    else
    next();
 
 }


router.get('/api/prod', (req, res)=>{
    res.send(productos);

})

router.get('/api/prod/:id', (req, res) => {

    let prodId = Number(req.params.id)
    
     let newArray = productos.filter((item) => item.id === prodId);

     if (!prodId) return res.status(400).send({error: 'No existe ID'})
     res.send({newArray})
 })

router.post('/api/prod', miMiddleware,(req,res)=>{

    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        code: req.body.code,
        stock: req.body.stock,
        price: req.body.price,
        thumbnail: req.body.thumbnail,
        id: idProds() +1,
        timestamp: new Date()
    }
    productos.push(newProduct)
    fs.writeFileSync('../src/productos.text', JSON.stringify(productos))
    res.send(newProduct)
    
})

router.put('/api/prod/:id', miMiddleware, (req,res)=>{
    const prodId = Number(req.params.id)
    const updateProd = req.body
    const prodIndex = productos.findIndex(product => product.id === prodId)
    console.log(productos[prodIndex])
    if (~prodIndex) {
        productos[prodIndex] = {
            ...updateProd,
            id: prodId,
            timestamp: new Date()
        }
        fs.writeFileSync('../src/productos.text', JSON.stringify(productos))
    res.send(productos[prodIndex])
    }

})

router.delete('/api/prod/:id', miMiddleware, (req,res)=>{
    const prodId = Number(req.params.id)

    const prodIndex = productos.findIndex(product => product.id === prodId)

    if (~prodIndex) {
        productos.splice(prodIndex, 1) 
        fs.writeFileSync('../src/productos.text', JSON.stringify(productos))
    res.send(productos)
    }

})

export default router


