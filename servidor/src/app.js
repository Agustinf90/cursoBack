import express from 'express';
import moment from 'moment';
import fs from 'fs'

class Archivo {

    productos = [{title: 'Fideos', price: 200, thumbnail: 'dsgasdgasdg', id: 1}, {title: 'Agua', price: 400, thumbnail: 'sdgqasgadsa', id: 2}];


    leer = async () => {

        try {
            let content = await fs.promises.readFile('productos.txt', 'utf-8')
            return content;
        }
        catch (error) {

            return console.log("Can't process file: " + error)
        }
    }

}

const productosFile = new Archivo()
const items = JSON.parse(await productosFile.leer())

const itemsRandom = items[Math.floor(Math.random() * items.length)]


const app = express()
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})

let visitsEndpoint1 = 0
let visitsEndpoint2 = 0

let json = [{'endpoint1': visitsEndpoint1},{'endpoint2': visitsEndpoint2}]

app.get('/items', async (req, res) => {
    visitsEndpoint1++
    
    json[0].endpoint1 = visitsEndpoint1

    res.send({items, cantidad: items.length})
})

app.get('/items-random', async (req, res) =>{

    visitsEndpoint2++
    json[1].endpoint2 = visitsEndpoint2

    res.send({item: itemsRandom})
})

app.get('/visitas', async (req,res)=> {
    res.send({visitas: json})
})
