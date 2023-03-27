import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "../loginValidation";


import "./login.css";

const Login = () =>{

    const [values, setValues] = useState({

        email: "",
        password: ""
    })

    const [errors, setErrors] = useState()

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }


    // stop our form form doing the default thing which is to do nothing
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(setValues(validation(values)))
    }

    return(
        <>
        <div className="loginCon" action="">
            <form class="loginform" onSubmit={handleSubmit}> 
                <h2>Log In</h2>
                <input type="email" placeholder="Email" className="Email" onChange={handleInput} name="email"/>
                <input type="password" placeholder="Password" onChange={handleInput} name="password"/>
                <Link to="/" className="Login modalLinks">login</Link>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

