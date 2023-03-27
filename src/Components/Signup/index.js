import React, { useState} from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import validation from "../loginValidation";

//need this to replicate the fetch command
import Axios from "axios";


const Signup = () =>{

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState()

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(setValues(validation(values)))
    }



    return(
        <>
        <div className="signUpCon">
            
            <form class="signUpForm" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Enter a username" className="Username" onChange={handleInput} name="username"/>
                <input type="email" placeholder="Enter a valid email" onChange={handleInput} name="email"/>
                <input type="password" placeholder="Enter a password" />
                <Link to="/" className="Login modalLinks">Back to login</Link> 
                <input type="submit" value="Create" className="Create modalLinks"/>
            </form>
            </div>
        </>
    )

}

export default Signup;