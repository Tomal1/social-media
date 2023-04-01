import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Lvalidation from "./Lvaladation";
import axios from "axios";

const Login = () =>{
    // initial input values set to empty string but will be populated as client inputs
    const [values, setValues] = useState({
        email: "",
        password: ""
    });


// navigate has to be in the function
    const navigate = useNavigate();
        
    const [errors, setErrors] = useState({})

//this function will track what the client dose and then store into the state object above
    const handleInput = (e) => {
        setValues(values => ({...values, 
            [e.target.name]: //detect changes typed in by client
            [e.target.value] //then store that into value attribute for the corresponding input field
        }))
    }

    const handleSubmit = (e) => {
        // stop our form form doing the default thing which is to do nothing
        e.preventDefault();    
        //whatever is returned from Lvalidation we will store it as an object in errors state variable as an object
        setErrors(Lvalidation(values));
        /*
        resolved: if you get "net::ERR_CONNECTION_REFUSED" in heroku when fetching data, it is because 
        you cant hard code URL like this: "http://localhost:3001" 
        should be like this instead: `http://localhost:${process.env.PORT || 3001}`
        */

        axios.get(`http://localhost:${process.env.PORT || 3001}`, values)
        .then(res=>{
            console.log("successfully logged in")
            console.log(res)
            navigate("/Profile")
        })
        .catch(err=> console.log(err))
        
    }

    return(
        <>
        <div className="loginCon">
            <form className="loginform" onSubmit={handleSubmit}> 
                <h2>Log In</h2>
                <input type="email" placeholder="Email" className="Email" value={values.email} onChange={handleInput} name="email"/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
                <input type="password" placeholder="Password" value={values.password} onChange={handleInput} name="password"/>
                {errors.password && <span>{errors.password}</span>}
                <input type="submit" className="Login modalLinks" value="Log In"/>
                <Link to="/Signup" className="SignUp modalLinks">Sign Up</Link>
            </form>
        </div>
        </>
    )
}

export default Login;

