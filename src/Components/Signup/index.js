import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import SUvalidation from "./SUvalidation";
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

    //this function will track what the client dose and then store into the state object above
    const clientInput = (e) => {
        setValues(values => ({...values, 
        [e.target.nameOfInput] /*detects changes in input*/: 
        [e.target.value]/*and then puts them into values object*/}))
    }

    const [errors, setErrors] = useState({});
   
    // to test this both backend and client must be operating and dns cannot be blocked or you will get "net::ERR_CONNECTION_REFUSED"
    const handleSubmit = (e) => {
        e.preventDefault();
        
        //whatever is returned from Lvalidation we will store it as an object in errors state variable as an object
        setErrors(SUvalidation(values))

        /*
        resolved: if you get "net::ERR_CONNECTION_REFUSED" in heroku when fetching data, it is because 
        you cant hard code URL like this: "http://localhost:3001" 
        should be like this instead: `http://localhost:${process.env.PORT || 3001}`
        */

        axios.post(`http://localhost:${process.env.PORT || 3001}/Signup`,values)
        .then(res =>{
            console.log(res)
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    
    return(
        <>
            <div className="signUpCon">
                
                <form className="signUpForm" onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>
                    <input type="text" placeholder="Enter a username" className="Username" valueInputted={values.username} onChange={clientInput} nameOfInput="username"/>
                    {errors.username && <span className="text-danger">{errors.username}</span>}
                    <input type="email" placeholder="Enter a valid email" valueInputted={values.email} onChange={clientInput} nameOfInput="email"/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                    <input type="password" placeholder="Enter a password" valueInputted={values.password} onChange={clientInput} nameOfInput="password"/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                    <Link to="/" className="Login modalLinks">Back to login</Link> 
                    <input type="submit" className="Create modalLinks" value="Create new account"/>
                </form>
            </div>
        </>
    )

}

export default Signup;
