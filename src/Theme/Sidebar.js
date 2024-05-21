import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTasks, FaCalendarAlt, FaUser, FaInfoCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={activeIndex === 0 ? "active" : ""} onClick={() => handleClick(0)}>
          <FaHome className={activeIndex === 0 ? "active-icon" : ""} style={{  fontSize: '22px' }} />
          <Link to="/pages/Main"> Dashboard</Link>
        </li>
        <li className={activeIndex === 1 ? "active" : ""} onClick={() => handleClick(1)}>
          <FaTasks className={activeIndex === 1 ? "active-icon" : ""} style={{  fontSize: '22px' }} />
          <Link to="Task"> All Tasks</Link>
        </li>
        <li className={activeIndex === 2 ? "active" : ""} onClick={() => handleClick(2)}>
          <FaCalendarAlt className={activeIndex === 2 ? "active-icon" : ""} style={{ fontSize: '22px' }} />
          <Link to="Scheduled"> Scheduled Tasks</Link>
        </li>
        <li className={activeIndex === 3 ? "active" : ""} onClick={() => handleClick(3)}>
          <FaUser className={activeIndex === 3 ? "active-icon" : ""} style={{ fontSize: '22px' }} />
          <Link to="profile"> My Profile</Link>
        </li>
        <li className={activeIndex === 4 ? "active" : ""} onClick={() => handleClick(4)}>
          <FaInfoCircle className={activeIndex === 4 ? "active-icon" : ""} style={{ fontSize: '22px' }} />
          <Link to="settings"> About Us</Link>
        </li>
      </ul>
  
    </div>
  );
}

export default Sidebar;
