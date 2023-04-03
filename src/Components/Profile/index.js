import React from "react";
import "./profile.css"
import { Link } from "react-router-dom";

const profile = () => {
    return(
        <>
            <div className="ProfileCon">
               {/* need to to change this to a separate component later */}
                <nav>
                    <ul>
                        <li className="navLinkes">News Feed</li>
                        <Link to ="/DeleteAccount" className="navLinkes">Delete Account</Link>
                        <li className="navLinkes">Log Out</li>
                    </ul>
                </nav>
                <form className="ProfilePicCon">
                    <label>Profile Picture</label>
                    <img className="ProfilePic" alt="picture of person who likes to rant"/>
                </form>

                <form className="AboutCon">
                    <label>About</label>
                    <textarea type="textarea" rows="8" cols="30" placeholder="Tell the world something about yourself"/>
                    <input type="submit" value="Done" className="AboutBTN Post"/>
                </form>
            </div>
            
        </>
    )
}

export default profile;