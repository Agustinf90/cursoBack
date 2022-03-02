
const texto = "Este es mi Desafio Número Tres"

// const timer = 1000
// console.log(texto.split(' ').length)
// console.log(texto.split('')[3].lenght)
// console.log(texto.split(' ').length[0])
const mostrarLetras = (texto,cb) =>{
    let i = 0;
    const recorrerPalabra = ()=>{
        // QUERÍA USAR ESTE METODO texto.split(' ').length PERO NO SE COMO UBICAR LUEGO LA PALABRA POR POSICION
        if(i<6){
            i++;
        }else{
            clearInterval(timer);
            // cb();
        }
    }
    const timer = setInterval(recorrerPalabra,1000);
}
// const funcionFinalizado = () => console.log("FINALIZADO EL PROCESO");

setTimeout(()=>{
    mostrarLetras(console.log(texto.split(' ')[0], texto.split(' ')[1]))
},0);
setTimeout(()=>{
    mostrarLetras(console.log(texto.split(' ')[2], texto.split(' ')[3]))
},1000);
setTimeout(()=>{
    mostrarLetras(console.log(texto.split(' ')[4], texto.split(' ')[5]))
},2000);
setTimeout(()=>{
    mostrarLetras(console.log("Proceso Terminado, ", "la cantidad de palabras del texto es: ",texto.split(' ').length))
},4000);