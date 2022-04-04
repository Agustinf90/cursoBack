import express from 'express'
import router from './routes/users.js';
import petsrouter from './routes/pets.js'
import __dirname from './utils.js';

const app = express()
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})

app.use((req,res,next)=>{
    console.log(`PETICION ${req.method} EN ${req.url}`);
    
    next();
})

app.use(express.json())
app.use(express.static(__dirname + '/public'))


app.use('/users', router)
app.use('/pets', petsrouter)

