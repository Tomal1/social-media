const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../src/App.js"));

const db = require("./config/connection");


app.get("/", (req, res) => {
    db.query("SELECT * FROM user", (err, result) =>{
        if(err){
            throw err;
        }else{
            return res.json(result);
        }
    })
})


app.get("/", (req,res)=>{

    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    
    db.query(sql,
        [
        req.body.username,
        req.body.password
        ],
    (err,result) =>{
        if(err){
            console.err("invalid user or password");
        } else {
            return res.json(result)
        }
    })
})

app.post("/Signup", (req, res)=>{
    const username = req.body.username; 
    const email = req.body.email; 
    const password = req.body.password;  

    db.query("INSERT INTO user (username, email, password) VALUES (?,?,?)", 
    [username, email, password], 
    (err, result) => {
        if(err){
            throw err;
        } 
        return res.json(result);
    })
})


app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})