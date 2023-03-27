import React from "react";

import { Link } from "react-router-dom";

import "./login.css";

const Login = () =>{

    return(
        <>
        <div className="loginCon" action="">
            <form class="loginform">
                <h2>Log In</h2>
                <input type="text" placeholder="Username" className="Username"/>
                <input type="password" placeholder="Password"/>
                <Link to="/" className="Login modalLinks">login</Link>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

