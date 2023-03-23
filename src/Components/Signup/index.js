import React, { useState} from "react";
import "./signup.css";


const Signup = () =>{

    const [usenameReg, setUsernameReg] = useState(""); 
    const [emailReg, setEmailReg] = useState(""); 
    const [passwordReg, setPasswordReg] = useState(""); 

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
                <input type="button" value="Sign Up" className="SignUp2" />
            </form>
            </div>
        </>
    )

}

export default Signup;