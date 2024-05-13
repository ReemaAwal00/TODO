import { useNavigate } from "react-router-dom";
// import VirinchiLogo from "../../assets/images/virinchi-logo.png";
import { useState,useEffect } from "react";

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set isVisible to true after component mounts
        setIsVisible(true);
    }, []);
    return (
        <div className="header">

            <h1>ListFull</h1>
            {/* <div className="{`fade-in-text ${isVisible ? 'visible' : ''}`}">
            <p>This text will fade in when the component mounts.</p>
            </div> */}
             <div className="fading-text">
                Let's Be Some Productive Everyday😉
            </div>
            
        </div>
    )
};

export default Header;