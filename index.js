const express = require("express");
const app = express();
const port =  process.env.port || 3000;


const requests = []

app.listen(port, ()=>{
    console.log("Server");
});


app.get('/', (req, res)=>{
    res.send("Welcome");
});