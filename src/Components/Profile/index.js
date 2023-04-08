import React, { useState } from "react";
import "./profile.css"
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav";

const Profile = () => {


    const [about, setAbout] = useState("");

    axios.get(`http://localhost:${process.env.PORT || 3001}/Profile`)
    .then(res =>{
            setAbout(res.data[0].about)
    })
    .catch(err => console.log(err))

    return(
        <>
            <div className="ProfileCon">
                <Nav/>
                <form className="ProfilePicCon">
                    <label>Profile Picture</label>
                    <img className="ProfilePic" alt="picture of person who likes to rant"/>
                </form>

                <form className="AboutCon">
                    <label>About</label>
                    {/* <textarea type="textarea" rows="8" cols="30" placeholder="Tell the world something about yourself"/>
                    <input type="submit" value="Done" className="AboutBTN Post"/> */}
                    {about ? <p>{about}</p> : null}
                    <input type="submit" value="edit"/>
                    <input type="submit" value="delete"/>
                </form>
            </div>
            
        </>
    )
}

export default Profile;