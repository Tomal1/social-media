import React, { useState} from "react";
import "./signup.css";

//need this to replicate the fetch command
import Axios from "axios";


const Signup = () =>{

    const [usernameReg, setUsernameReg] = useState(""); 
    const [emailReg, setEmailReg] = useState(""); 
    const [passwordReg, setPasswordReg] = useState(""); 

    const register = () =>{
        Axios.post("http://localhost:3001/Signup", 
        {
            username: usernameReg, 
            email:emailReg, 
            password:passwordReg 
        }).then(data =>{
            console.log(data)
        })
    }

    return(
        <>
        <div className="signUpCon">
            <form class="signUpForm">
                
                <input type="text"
                onChange={(e)=>{
                   setUsernameReg(e.target.value)
                }}
                placeholder="Enter a username name" className="Username2"/>

                <input type="email"
                onChange={(e)=>{
                    setEmailReg(e.target.value)
                }}
                placeholder="Enter a valid email address"/>

                <input type="password"
                onChange={(e)=>{
                    setPasswordReg(e.target.value)
                }}
                placeholder="Enter a password"/>
                
                <input type="button" value="Back to login" className="backToLogin"/>
                
                <input type="button"
                onClick={register}
                
                value="Sign Up" className="SignUp2" />
            </form>
            </div>
        </>
    )

}

export default Signup;