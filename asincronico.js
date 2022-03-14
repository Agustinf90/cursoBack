
const mostrarPalabras = async (texto, tiempo = 4000, cb) => {
 await new Promise 
     ((resolve, reject) =>{
        let i = 0;
        if(i<texto.length){
            console.log(texto.split(' '));
            i++;
        }else{
            cb()
            };
     
        })}    
     

mostrarPalabras("Hola soy un texto", null, mostrarPalabras("Con promesas en Javascript"), 2000, mostrarPalabras("Que me costó una bocha"), 3000)
        


// async function leer(texto, tiempo = 1000, cb) {
//     const palabras = texto.split(" ");
//     for (let palabra of palabras) {
//     await new Promise(function (resolve, reject) {
//     setTimeout(() => {
//     resolve();
//     }, tiempo);
//     })
//     console.log(palabra);
//     }
//     cb();
//     }
    
//     leer("Primer texto", undefined,
//     () => leer("Segundo texto", 2000,
//     () => leer("Tercer texto", 3000,
//     () => console.log("Fin")
//     )
//     )
//     );