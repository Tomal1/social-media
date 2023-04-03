import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./deleteAcc.css";
import axios from "axios";

const DeleteAccount = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
        
    // const [errors, setErrors] = useState({})

    const handleInput = (e) => {
        setValues(values => ({...values, 
            [e.target.name]:
            [e.target.value]
        }))
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();    
        // setErrors(Lvalidation(values));

        /*during delete fetch request one must use {data: statVariableName} or it wont send data to the backend */

        axios.delete(`http://localhost:${process.env.PORT || 3001}/DeleteAccount`, { data: values })
        .then(res=>{
            console.log("Account successfully deleted")
            console.log(res)
            navigate("/")
        })
        .catch(err=> console.log(err))
    }

    return(
        <>
        <div className="deleteCon">
            <form className="deleteForm" onSubmit={handleSubmit}> 
                <h2>Delete Account</h2>
                <input type="email" placeholder="Email to confirm" className="Email" value={values.email} onChange={handleInput} name="email"/>
                {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                <input type="password" placeholder="Password to confirm" value={values.password} onChange={handleInput} name="password"/>
                {/* {errors.password && <span>{errors.password}</span>} */}
                <input type="submit" className="Delete modalLinks" value="Delete Account"/>
                <Link to="/Profile" className="Cancel modalLinks">Cancel</Link>
            </form>
        </div>
        </>
    )
}

export default DeleteAccount;