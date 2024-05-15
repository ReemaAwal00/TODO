import { useNavigate } from "react-router-dom";
// import VirinchiLogo from "../../assets/images/virinchi-logo.png";
import React, { useState, useEffect } from 'react';
import Second from "../images/Second";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);
    return (
        <div className="header">

           <Second/>
            {/* <div className="{`fade-in-text ${isVisible ? 'visible' : ''}`}">
            <p>This text will fade in when the component mounts.</p>
            </div> */}
             {/* <div className="profile">
            <img src="path_to_profile_image.jpg" alt="Profile" className="profile-image" />
            <span className="profile-name">John Doe</span>
        </div> */}
        <button class="logout-btn" type="button" >Log Out</button>
            
        </div>
    )
};

export default Header;