import React, { useState} from "react";
import "./signup.css";
import { Link } from "react-router-dom";

//need this to replicate the fetch command
import Axios from "axios";


const Signup = () =>{



    return(
        <>
        <div className="signUpCon">
            
            <form class="signUpForm">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Enter a username name" className="Username2"/>
                <input type="email" placeholder="Enter a valid email address"/>
                <input type="password" placeholder="Enter a password"/>
                <Link to="/" className="Login modalLinks">Back to login</Link> 
                <input type="button" value="Sign Up" className="SignUp2" />
            </form>
            </div>
        </>
    )

}

export default Signup;