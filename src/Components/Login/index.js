import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

import axios from "axios";

const Login = () =>{

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
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
                <input type="email" placeholder="Email" className="Email" onChange={handleInput} name="email"/>
                <input type="password" placeholder="Password" onChange={handleInput} name="password"/>
                <input type="submit" className="Login modalLinks" value="Log In"/>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

