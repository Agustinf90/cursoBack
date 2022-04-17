import express from "express";
import { uploader } from "../utils.js";

import fs from 'fs'
const router = express.Router()


let carts = []
let productos = fs.readFileSync('../src/productos.text')
productos = JSON.parse(productos);


const idCarts = () => {
    let cartIds = 0
    carts?.forEach(cart => {
        if(cart.id > cartIds) {
            cartIds = cart.id
        }
    })
    return cartIds
}

router.post('/api/carrito',(req,res)=>{
    const newCart = {
        id: idCarts() +1,
        timestamp: new Date(),
        products: []
    }
    carts.push(newCart)
    fs.writeFileSync('../src/carts.text', JSON.stringify(carts))
    res.send(newCart)
    
})


router.get('/api/carrito',(req,res)=>{
    res.send(carts)

})

router.delete('/api/productos/:id1/carrito/:id2',(req,res)=>{
 
    let {id1, id2} = req.params
    let parseNum = parseInt(id1)
    let parseNum2 = parseInt(id2)

    let idNum = parseNum
    let idNum2 = parseNum2
    
    const cartIn = carts.filter(item => item.id === idNum2)

    let prodInCart = cartIn[0].products
    const prodIndex = prodInCart.findIndex(product => product.id === idNum)
    console.log(prodIndex)
    if (~prodIndex) {
        prodInCart.splice(prodIndex, 1) 
        fs.writeFileSync('../src/productos.text', JSON.stringify(productos))}

    fs.writeFileSync('../src/carts.text', JSON.stringify(carts))
    res.send(carts)
    }
)

router.post('/api/productos/:id1/carrito/:id2',(req,res)=>{

    let {id1, id2} = req.params
let parseNum = parseInt(id1)
let parseNum2 = parseInt(id2)

let cartActual = []
let prodActual = []
let stockActual 


let idNum = parseNum
let idNum2 = parseNum2

cartActual = carts.filter((item) => item.id === idNum2);
// console.log(newArray)

prodActual = productos.filter((item) => item.id === idNum);

// if (!cartActual[0].id) return res.status(400).send({error: 'No existe ID'})
// if (!prodActual[0].id) return res.status(400).send({error: 'No existe ID'})


let proud = cartActual[0].products

let newArray = proud.find((item) => item.id === prodActual[0].id);



    if (newArray) {
        newArray.stock ++

    }
    else {

        cartActual[0].products.push(prodActual[0])
    }
       fs.writeFileSync('../src/carts.text', JSON.stringify(carts))
    res.send(carts)
    })


router.get('/api/carrito/productos/:id', (req, res) => {
    let cartId = Number(req.params.id)
    
     let newArray = carts.filter((item) => item.id === cartId);

     if (!cartId) return res.status(400).send({error: 'No existe ID'})
     res.send({newArray})
 })




export default router