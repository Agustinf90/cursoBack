import express from 'express';
import momento from 'moment';
import fs from 'fs'

class Archivo {

    productos = [{title: 'Fideos', price: 200, thumbnail: 'dsgasdgasdg', id: 1}, {title: 'Agua', price: 400, thumbnail: 'sdgqasgadsa', id: 2}];


    guardar = async (title, price, thumbnail) => {

        try {
            this.productos.push({title , price, thumbnail: thumbnail, id: this.productos.length+1})
            await fs.promises.writeFile('productos.txt', JSON.stringify(this.productos))
        } catch (error) {
            console.log("Can't process file: " + error)
        }
    }
    leer = async () => {

        try {
            let content = await fs.promises.readFile('productos.txt', 'utf-8')
            return content;
        }
        catch (error) {

            return console.log("Can't process file: " + error)
        }
    }
    eliminar = async () => {
        try {
            await fs.promises.unlink('productos.txt')
            return console.log('Archivo Eliminado')

        }
        catch {
            return console.log("Can't process file: " + error)
        }
    }
}

const productosFile = new Archivo()
const items = JSON.parse(await productosFile.leer())

const itemsRandom = items[Math.floor(Math.random() * items.length)]
let visits = 0

const app = express()
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})

app.get('/items', async (req, res) => {
    let visitsItems = visits++
    
    res.send({items, cantidad: items.length})
})
console.log(visits)

app.get('/items-random', async (req, res) =>{
    let visitsItemsRandom = visits++
    res.send({item: itemsRandom})

})
app.get('/visitas', async (req,res)=> {
    res.send({ visitsItems , visitsItemsRandom})
})
// getBookNames(){
//     let nombreslibros = this.libros.map(libro=>{
//         return  libro.book;
//     })