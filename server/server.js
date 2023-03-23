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


app.post("/signup", (req,res)=>{
    db.query("INSERT INTO user (username, email, password) VALUES (?,?,?)", [username, email, password], (err, result)=>{
        if(err){
            throw err;
        } else {
            alert("new login details have been stored")
        }
    })
})






app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})