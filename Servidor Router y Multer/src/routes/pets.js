import express from "express";

const router = express.Router();
let pets = [];

router.get('/', (req, res)=> {
    res.send('Holas Mascotas')
})

export default router