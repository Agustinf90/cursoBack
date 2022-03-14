const _private = new WeakMap()

class Book {
   constructor(a, b, c) {
       
    const properties = {
       title : a,
       author : b,
       price : c
    }
    _private.set(this, {properties})
   }
    get title() {
        return _private.get(this).properties['title']
    }
    set title(newTitle) {
        return _private.get(this).properties['title'] = newTitle;

    }
    get author() {
        return _private.get(this).properties['author']
    }
    set author(newAuthor) {
        return _private.get(this).properties['author'] = newTitle;

    }
    get price() {
        return _private.get(this).properties['price']
    }
    set price(newPrice) {
        return _private.get(this).properties['price'] = newTitle;

    }
    getAllData() {
        console.log(`Título: ${this.title}, Autor: ${this.author}, Precio: ${this.price}`)
    }
}

class Comic extends Book{
     constructor(name, author, price, illustrators){
       super (name,author,price);

       this.illustrators = illustrators;
    } 
    addIllustrator(newIllustrator = []) {
      this.illustrators.push(newIllustrator)
    }
    getAllData() {
        super.getAllData();
        console.log(`Ilustradores: ${this.illustrators}`)
    }
}
class ShoppingCart {
    constructor() {
        this.products = []
    }
    addProduct(amount, price){
        this.products.push( ...Array(amount).fill(price))
    }
    showProducts(){
        console.log(this.products)
    }
    calcTotal(){
        return this.products
        .map(price => price)
        .reduce( (ac, price) => ac + price, 0)
    }
    printTicket() {
    console.log(`Total a pagar ${this.calcTotal()}`)
    }
}


const book1 = new Book ('1984', 'G.O', 350)
const book2 = new Book ('Frank', 'M.S', 200)
// const book1 = new Book()
// const book2 = new Book()
const comic1 = new Comic ('KL', 'A.M', 150, ['B.B'])


book1.title = '1985'


comic1.addIllustrator('J.H')
console.log(comic1.illustrators)

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price)
cart.addProduct(1, book1.price)

cart.showProducts()
cart.printTicket()

book1.getAllData()
comic1.getAllData()