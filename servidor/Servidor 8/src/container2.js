export default class ContenedorProds{
    constructor(){
        this.prods = [];
    }

    getAllProds = () =>{
        return this.prods;
    }
    saveProd = (prods) =>{
        this.prods.push(prods);
    }
}
