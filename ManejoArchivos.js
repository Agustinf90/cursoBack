import fs from 'fs'
import { writeFile } from 'fs/promises';

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

const productosFile = new Archivo ()
await productosFile.guardar('Coca', 150, 'tgerwqtqwer')
await productosFile.guardar('Fernet', 450, 'sdfgerwqtqwer')
await productosFile.guardar('Paso de los toros', 250, 'tgerdsfgsdfwqtqwer')
console.log(await productosFile.leer())


