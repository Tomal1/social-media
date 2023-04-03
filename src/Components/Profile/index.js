import React from "react";
import "./profile.css"


const profile = () => {
    return(
        <>
            <div className="ProfileCon">
               {/* need to to change this to a sepperate componant later */}
                <nav>
                    <ul>
                        <li>News Feed</li>
                        <li>Delete Account</li>
                        <li>Log Out</li>
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