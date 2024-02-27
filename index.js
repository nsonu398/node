const express = require('express')
const app = express();

app.get('/', async(req, res)=>{
    res.status(200).send({status:200,error:"",msg:"All good"})
})

app.listen(3000,()=>{
    console.log('app is listening on port 3000');
})