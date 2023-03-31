import React from "react";
import "./profile.css"


const profile = () => {
    return(
        <>
            <div className="ProfileCon">

                <form className="ProfilePicCon">
                    <label>Profile Picture</label>
                    <img className="ProfilePic" alt="picture of person who likes to rant"/>
                </form>

                <form className="AboutCon">
                    <label>About</label>
                    <textarea type="textarea" rows="8" cols="30" placeholder="Tell the world something about yourself"/>
                    <input type="submit" value="Done" className="AboutBTN Post"/>
                </form>

                <form className="RantCon">
                    <label>what is your Rant?</label>
                    <textarea type="textarea" rows="8" cols="30" placeholder="What are you ranting on about now?"/>
                    <input type="submit" value="Done" className="RantBTN Post"/>
                </form>
            </div>
            
        </>
    )
}

export default profile;