import { useNavigate } from "react-router-dom";
// import VirinchiLogo from "../../assets/images/virinchi-logo.png";
import React, { useState, useEffect } from 'react';
import Second from "../images/Second";
import Notify from "../pages/Notify";

const Header = () => {

    const navigate = useNavigate();
  const logout =( ) => {
   
    localStorage.removeItem('isLogin')
    navigate('/');
  }
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);
    return (
        <div className="header">

           <Second/>
            
        <Notify/>
        <button class="logout-btn" type="button" onClick={logout} >Logout</button>
            
        </div>
    )
};

export default Header;