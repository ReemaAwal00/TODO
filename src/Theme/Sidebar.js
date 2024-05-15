import { Link } from "react-router-dom";

import { FaHome, FaTasks, FaCalendarAlt, FaUser, FaInfoCircle } from 'react-icons/fa';

const Sidebar =() =>{
    

  return(
    <div class="sidebar">
    <ul>
        <li > <FaHome style={{ color: 'rgb(95, 95, 95)', fontSize: '22px' }} />   <Link to="">Dashboard</Link></li>
        <li><FaTasks style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}}/> <Link to="Task">All Tasks</Link></li>
        <li><FaCalendarAlt style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}}/> <Link to="Scheduled">Scheduled Tasks</Link></li>
        <li> <FaUser style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}} /> <Link to="profile"> My profile</Link></li>
        <li><FaInfoCircle style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}} /> <Link to="settings"> About Us</Link></li>
    </ul>
    
</div>
);
}
export default Sidebar;