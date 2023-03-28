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

        axios.get("http://localhost:3001/", values)
        .then(res=>{
            console.log(res)
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

