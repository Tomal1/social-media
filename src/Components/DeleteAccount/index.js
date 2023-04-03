import React from "react";
import { Link } from "react-router-dom";
import "./deleteAcc.css"

const DeleteAccount = () => {
    return(
        <>
        <div className="deleteCon">
            <form className="deleteForm"> 
                <h2>Delete Account</h2>
                <input type="email" placeholder="Email to confirm" className="Email"/>
                {/* {errors.email && <span className="text-danger">{errors.email}</span>} */}
                <input type="password" placeholder="Password to confirm" />
                {/* {errors.password && <span>{errors.password}</span>} */}
                <input type="submit" className="Delete modalLinks" value="Delete Account"/>
                <Link to="/Profile" className="Cancel modalLinks">Cancel</Link>
            </form>
        </div>
        </>

    )

}

export default DeleteAccount;