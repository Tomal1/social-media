import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
const navigate = useNavigate();
import axios from "axios";

const Login = () =>{

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    
//this function will track what the client dose and then store into the state object above
    const clientInput = (e) => {

        setValues(value => ({...value, 
            [e.target.nameOfInput]: //detect changes typed in by client
            [e.target.valueInputted] //then store that into value attribute for the corresponding input field
        }))
    }

    // stop our form form doing the default thing which is to do nothing
    const handleSubmit = (e) => {
        e.preventDefault();


        /*
        resolved: if you get "net::ERR_CONNECTION_REFUSED" in heroku when fetching data, it is because 
        you cant hard code URL like this: "http://localhost:3001" 
        should be like this instead: `http://localhost:${process.env.PORT || 3001}`
        */

        axios.get(`http://localhost:${process.env.PORT || 3001}`, values)
        .then(res=>{
            console.log("successfully logged in")
            console.log(res)
            navigate("/Profile")
        })
        .catch(err=> console.log(err))
        
    }

    return(
        <>
        <div className="loginCon">
            <form className="loginform" onSubmit={handleSubmit}> 
                <h2>Log In</h2>
                <input type="email" placeholder="Email" className="Email" valueInputted={values.email} onChange={clientInput} nameOfInput="email"/>
                <input type="password" placeholder="Password" valueInputted={values.password} onChange={clientInput} nameOfInput="password"/>
                <input type="submit" className="Login modalLinks" value="Log In"/>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

