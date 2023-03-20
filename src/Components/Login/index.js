import React from "react";

const Login = () =>{
    return(
        <>
            <form>
                <input type="email" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <input type="button" value="Login"/>
                <input type="button" value="Sign Up"/>
            </form>
        </>
    )
}

export default Login;

