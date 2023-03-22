const express = require("express");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = require("./config/connection")





app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})