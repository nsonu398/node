const express = require("express");
const app = express();
const port =  process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log("Server");
});


app.get('/', (req, res)=>{
    res.send("Welcome to my world");
});