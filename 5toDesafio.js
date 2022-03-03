const http = require('http');

const server = http.createServer((req,res)=>{
    res.end(JSON.stringify({id: Math.round(Math.random()*(10-1)+parseInt(1)),
             title: "Cerveza " + Math.round(Math.random()*(10-1)+parseInt(1)),
             price: Math.round(Math.random()*(99.9999-0)+parseInt(0)),
             thumbnail: "Foto " + Math.round(Math.random()*(10-1)+parseInt(1))
    }))
})

server.listen(8080, ()=>{
    console.log("Hola");

})




