import React, { useState } from "react";
import "./profile.css"
// import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav";
import { useParams } from "react-router-dom";

const Profile = () => {

  /*Note this is how we use a dynamic URL 
  1) { username } = useParams(); will get the path specified in App.js line 27 for url
  */
    const { username } = useParams();

    const [about, setAbout] = useState("");

      // 2) we enter the username as a dynamic (changeable) value
        axios.get(`http://localhost:${process.env.PORT || 3001}/${username}`)
        .then(res =>{
            console.log(res.data[0].about)
                setAbout(res.data[0].about)
        })
        .catch(err => console.log(err))

    return(
        <>
            <div className="ProfileCon">
                <Nav/>
                <form className="ProfilePicCon">
                    <label>Profile Picture</label>
                    <img className="ProfilePic" alt="user"/>
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