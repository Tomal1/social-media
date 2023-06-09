const express = require("express");
const cors = require("cors")

require("dotenv").config();

const PORT = 3001;
const app = express();

// allows us to use special characters in url
app.use(express.urlencoded({ extended: true }));

// express by default dose not use json, this allow it
app.use(express.json());

//did not resolve net::ERR_CONNECTION_REFUSED
app.use(cors());

app.use(express.static("../src/App.js"));

const db = require("./config/connection");


app.get("/Signup", (req, res) => {
    
    const sql = "SELECT * FROM signUp";
    db.query(sql, (err, data) =>{
        if(err){
            throw err;
        }else{
            return res.json(data);
        }
    });
});


app.post("/", (req, res) => {
/*
    OK so you have to use POST instead of GET method in the frontend to retrieve data when using req.body
    in the backend; this is a problem with chrome not axios.
    (SO THIS IS ACTUALLY A GET ROUTE NOT A POST)
*/
    const sql = "SELECT * FROM signUp WHERE email = ? AND password = ?";
    const values = [req.body.email,
                    req.body.password]
    db.query(sql, values, (err, data) =>{
        if(err){
            throw err;
        }else{
            return res.json(data);   
        }
    })
});


app.get("/:username", (req,res)=>{
    values = [req.params.username]
    const sql = `SELECT * FROM signUp LEFT JOIN profile ON signUp.id=profile.profile_id WHERE username = ?`;
    db.query(sql,values,(err,data)=>{
        if(err){
            throw err;
        }else{
            return res.json(data);   
        }
    })

});

app.delete("/DeleteAccount", (req, res)=>{

    const values = [req.body.email, 
    req.body.password]

    const sql =  `DELETE FROM signUp WHERE email = ? AND password = ?`; // Always use backticks when not hard coding
    
    db.query(sql,
        values,
    (err,data) => {
        if(err){
            throw err;
        } else{
            console.log(data)
            return res.json("deleted user successfully");
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
            return res.json(`new user successfully created ${data}`);
        }
    })
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`listening to port ${process.env.PORT || PORT}`);
})