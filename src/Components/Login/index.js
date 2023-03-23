import React from "react";

import "./login.css";

const Login = () =>{
    return(
        <>
        <div className="loginCon">
            <form class="loginform">
                <input type="email" placeholder="Email" className="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="button" value="Login" className="Login"/>
                <input type="button" value="Sign Up" className="SignUp" />
            </form>
            </div>
        </>
    )
}

export default Login;

