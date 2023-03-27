const express = require("express");

const cors = require("cors")

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
// express by default dose not use json, this allow it
app.use(express.json());

//did not resolve net::ERR_CONNECTION_REFUSED
app.use(cors());

app.use(express.static("../src/App.js"));

const db = require("./config/connection");


app.get("/Signup", (req, res) => {
    db.query("SELECT * FROM signUp", (err, data) =>{
        if(err){
            throw err;
        }else{
            return res.json(data);
        }
    })
})



app.post("/Signup", (req, res)=>{

    const values =[
    username = req.body.username, 
    email = req.body.email,
    password = req.body.password
    ]

    db.query("INSERT INTO signUp (`username`, `email`, `password`) VALUES (?)", 
    [values], 
    (err, data) => {
        if(err){
            throw err;
        } else{
        return res.json("new user successfully created");
        }
    })
})


app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`);
})