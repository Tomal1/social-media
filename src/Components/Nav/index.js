import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return(
    <nav>
        <ul>
            <Link to ="/Profile" className="navLinkes">Profile</Link>
            <li className="navLinkes">News Feed</li>
            <Link to ="/DeleteAccount" className="navLinkes">Delete Account</Link>
            <li className="navLinkes">Log Out</li>
        </ul>
    </nav>
    )
};

export default Nav;