import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaHome, FaTasks, FaCalendarAlt, FaUser, FaCog } from 'react-icons/fa';

const Sidebar =() =>{
    const navigate = useNavigate();
  const logout =( ) => {
   
    localStorage.removeItem('isLogin')
    navigate('/');
  }

  return(
    <div class="sidebar">
    <ul>
        <li > <FaHome style={{ color: 'rgb(95, 95, 95)', fontSize: '22px' }} />   <Link to="">Dashboard</Link></li>
        <li><FaTasks style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}}/> 
        
        
        <Link to="Task">All Tasks</Link>
        
        
        
        </li>



        <li><FaCalendarAlt style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}}/> <Link to="Scheduled">Scheduled Tasks</Link></li>
        <li> <FaUser style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}} /> <Link to="profile"> My profile</Link></li>
        <li><FaCog style={{ color: 'rgb(95, 95, 95)', fontSize: '22px'}} /> <Link to="settings"> Settings</Link></li>
    </ul>
    
</div>
);
}
export default Sidebar;