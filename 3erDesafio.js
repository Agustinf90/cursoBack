const { async } = require("rxjs");



// const espera = tiempo => {
    
//   } 
// const timer = 1000
// console.log(texto.split(' ').length)
// console.log(texto.split('')[3].lenght)
// console.log(texto.split(' ').length[0])
// const mostrarLetras = (texto,cb, tiempo) =>{
//     let i = 0;
//     const recorrerPalabra = ()=>{
//         // QUERÍA USAR ESTE METODO texto.split(' ').length PERO NO SE COMO UBICAR LUEGO LA PALABRA POR POSICION
//         if(i<6){
//             i++;
//         }else{
//             const esperaa = () => {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                   resolve('ok');
//                 }, tiempo);
//               })
//             }
            // clearInterval(tiempos);
            // cb();
//         }
//     }
//     // const timer = setInterval(recorrerPalabra,tiempos);
// }
// const obtener = async () => {
//   const obteniendo = await mostrar()
//   console.log(obteniendo)
// }
// const funcionFinalizado = () => console.log("FINALIZADO EL PROCESO");
// console.log()
// setTimeout(()=>{
//     mostrarLetras(console.log(texto.split(' ')[0], texto.split(' ')[1]))
// },0);
// setTimeout(()=>{
//     mostrarLetras(console.log(texto.split(' ')[2], texto.split(' ')[3]))
// },1000);
// setTimeout(()=>{
//     mostrarLetras(console.log(texto.split(' ')[4], texto.split(' ')[5]))
// },2000);
// setTimeout(()=>{
//     mostrarLetras(console.log("Proceso Terminado, ", "la cantidad de palabras del texto es: ",texto.split(' ').length))
// },4000);


//   fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then( response => response.json())
//   .then( json => console.log(json))
//   .then(() => esperar(5000))
//   .then( res => console.log(res))
//   .then(() => fetch("https://pokeapi.co/api/v2/pokemon/1"))
//   .then( response => response.json())
//   .then( json => console.log(json));
// const texto = "Este es mi Desafio Número Tres"
// const tiempo = 4000
// const esperaa = (tiempo) => {
//     let i = 0;
//     const recorrerPalabra = ()=>{
//         // QUERÍA USAR ESTE METODO texto.split(' ').length PERO NO SE COMO UBICAR LUEGO LA PALABRA POR POSICION
//         if(i<6){
//             i++;
//             console.log(i)
//         }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('ok');
    //   }, tiempo );
    // })
//   } }
//   esperaa(tiempo).then((res) => console.log(texto.split(' ')[0], texto.split(' ')[1]));
// esperaa(tiempo*2).then((res) => console.log('dos'));
// esperaa(tiempo*3).then((res) => console.log("Tres"));


// const texto = "Este es mi Desafio Número Tres"
// const tiempo = 4000
// const esperaa = (texto,tiempo) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(texto);
//       }, tiempo );
//     })
//   } 
//   esperaa(tiempo).then((res) => console.log(texto.split(' ')[0], texto.split(' ')[1]));
// esperaa(tiempo*2).then((res) => console.log(texto.split(' ')[2], texto.split(' ')[3]));
// esperaa(tiempo*3).then((res) => console.log("Tres"));
// const mostrarLetras = (palabra,tiempode,cb) =>{
//     let i = 0;
//     const recorrerPalabra = ()=>{
//         if(i<palabra.length){
//             console.log(palabra[i]);
//             i++;
//         }else{
//             clearInterval(timer);
//             cb();
//         }
//     }
//     const timer = setInterval(recorrerPalabra,1000);
    // const timer = setInterval(()=>{
    //     if(i<palabra.length){
    //         console.log(palabra[i]);
    //         i++;
    //     }else{
    //         clearInterval(timer);
    //         cb();
    //     }
    // },1000)



// const funcionFinalizado = () => console.log("FINALIZADO EL PROCESO");

// setTimeout(()=>{
//     mostrarLetras('HEMOS',funcionFinalizado)
// },0);
// setTimeout(()=>{
//     mostrarLetras('FINALIZADO',funcionFinalizado)
// },250);
// setTimeout(()=>{
//     mostrarLetras('POR HOY',funcionFinalizado)
// },500);
const texto = "Este es mi desafio número 3"
// console.log(texto.length)
const tiempoDeEspera = 2000
// texto = texto.replace (variosBlancos," ");
// texto = texto.replace (primerBlanco,"");
// texto = texto.replace (ultimoBlanco,"");
textoTroceado = texto.split( " ");
console.log(textoTroceado)
numeroPalabras = textoTroceado.length;
console.log(numeroPalabras)
const mostrarLetras = (texto,tiempoDeEspera = 1000,cb) =>{
    let i = 0;
    const recorrerPalabra = ()=>{
    const timer = setInterval(()=>{
        if(i<numeroPalabras.length){
            console.log(numeroPalabras[i]);
            i++;
        }else{
            clearInterval(timer);
            cb();
        }
    },tiempoDeEspera)
    }
}

const funcionFinalizado = () => console.log(texto);


// setTimeout(()=>{
//     mostrarLetras('HEMOS',funcionFinalizado)
// },0);
// setTimeout(()=>{
//     mostrarLetras('FINALIZADO',funcionFinalizado)
// },250);
// setTimeout(()=>{
//     mostrarLetras('POR HOY',funcionFinalizado)
// },500);
    //     if(i<palabra.length){
    //         console.log(palabra[i]);
    //         i++;
    //     }else{
    //         clearInterval(timer);
    //         cb();
    //     }
    // }
    // // const timer = setInterval(recorrerPalabra,tiempoDeEspera);