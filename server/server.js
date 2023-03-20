const express = require("express");

const PORT = 3001;

const app = express();


app.get("/",(req,res)=>{
    res.json("hello how are you")
})


app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})