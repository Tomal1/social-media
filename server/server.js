const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = require("./config/connection");


app.get("/", (req, res, next) => {
    db.query("SELECT * FROM username", (err, result) =>{
        if(err){
            throw err;
        }else{
            return res.json(result);
        }
    })
})






app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})