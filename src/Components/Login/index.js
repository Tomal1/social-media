import React, { useState } from "react";
import { Link } from "react-router-dom";


import "./login.css";

const Login = () =>{

    const [values, setValues] = useState({

        email: "",
        password: ""
    })

    return(
        <>
        <div className="loginCon" action="">
            <form class="loginform">
                <h2>Log In</h2>
                <input type="email" placeholder="Email" className="Email"/>
                <input type="password" placeholder="Password"/>
                <Link to="/" className="Login modalLinks">login</Link>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

