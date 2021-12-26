const express = require("express");
const app = express();


const requests = []

app.listen(3000, ()=>{
    console.log("Server");
});


app.get('/', (req, res)=>{
    res.send("Welcome");
});