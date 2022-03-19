import fs from 'fs'

class Archivo {
    // constructor({title, price, thumbnail, id}){
    // this.title = title;
    // this.price = price;
    // this.thumbnail = thumbnail;
    // this. id = id;
    // }
    productos = [{title: 'Fideos', price: 200, thumbnail: 'dsgasdgasdg', id: 1}, {title: 'Agua', price: 400, thumbnail: 'sdgqasgadsa', id: 2}];


    guardar = async (title, price, thumbnail) => {

        try {
            this.productos.push({title , price, thumbnail: thumbnail, id: this.productos.length+1})
            await fs.promises.writeFile('./productos.txt', JSON.stringify(this.productos))
        } catch (error) {
            console.log("Can't process file: " + error)
        }
    }

    leer = async () => {

        try {
            let content = await fs.promises.readFile('./productos.txt', 'utf-8')
            return content
            
        }
        catch (error) {

            return console.log("Can't process file: " + error)
        }
   

    }
    // getBookNames(){
    //         let titles = this.productos.map(title=>{
    //             title.id;
    //         })

    
    
    // }


}
// const productosFile = new Archivo()

// await productosFile.guardar('Cerveza', 500, 'sdasd23gasdga32')
// const items = JSON.parse(await productosFile.leer())
// let num = 2 
// let num3 = items.map(function(element) {
//   return element.id;
  
//   if (element.id<5){
//       console.log('si')
//   }
// });
// let num2 =items.map(element => {
//     return element.id
 
// })
// console.log(num2)

// let num4 = items.forEach(element => {
//   return element
// });
// console.log(num4)
// console.log(items.id)


// console.log(num2)
// console.log(num3)
// let numid = 10
// if (numid = num2){
//     console.log('Si')
// } 
// else {
//     console.log('no')
// }


// console.log(items)


export default Archivo