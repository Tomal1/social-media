import React from "react";
import "./signup.css";


const Signup = () =>{

    return(
        <>
        <div className="signUpCon">
            <form class="signUpForm">
                <input type="text" placeholder="Enter a username name" className="Email2"/>
                <input type="email" placeholder="Enter a valid email address"/>
                <input type="password" placeholder="Enter a password"/>
                <input type="button" value="Back to login" className="backToLogin"/>
                <input type="button" value="Sign Up" className="SignUp2" />
            </form>
            </div>
        </>
    )

}

export default Signup;