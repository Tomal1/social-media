import React, { useState} from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

//need this to replicate the fetch command
import axios from "axios";

const Signup = () =>{

    // initial input values object when nothing typed in
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues((prev) => ({...prev, [event.target.name] /*detects changes in input*/: 
        [event.target.value]/*and then puts them into values object*/}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

 
       axios.post("http://localhost:3001/Signup", values)
            navigate("/")
    
        
    }


    return(
        <>
            <div className="signUpCon">
                
                <form className="signUpForm" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Enter a username" className="Username" onChange={handleInput} name="username"/>
                    <input type="email" placeholder="Enter a valid email" onChange={handleInput} name="email"/>
                    <input type="text" placeholder="Enter a password" onChange={handleInput} name="password"/>
                    <Link to="/" className="Login modalLinks">Back to login</Link> 
                    <button className="Create modalLinks" onClick={handleSubmit}>Create</button>
                </form>
            </div>
        </>
    )

}

export default Signup;
