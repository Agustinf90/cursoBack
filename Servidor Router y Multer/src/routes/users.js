import express from "express";
import { uploader } from "../utils.js";

const router = express.Router()
let users = [];

// router.use(function (req, res, next){
//     console.log('Time:', Date.now());
//     next()
// })
const miMiddleware = (req,res,next)=> {
   console.log('HOLSDGMIDELARWR');
   next();

}

router.get('/', (req, res)=>{
res.send({status:"success", payload:users})
})

router.post('/' , uploader.single('file'), (req, res)=> {
    console.log(req.file)
    let user = req.body;
    user.picture = req.file.filename;
    users.push(user);
    res.send({status: "success", message: "added"})
})

export default router