import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Sidebar =() =>{
    const navigate = useNavigate();
  const logout =( ) => {
   
    localStorage.removeItem('isLogin')
    navigate('/');
  }

  return(
    <div class="sidebar">
    <ul>
        <li ><Link to="">Dashboard</Link></li>
        <li><Link to="Task">All Tasks</Link></li>
        <li><Link to="Scheduled">Scheduled Tasks</Link></li>
        <li><Link to="profile"> My profile</Link></li>
        <li> <Link to="settings"> Settings</Link></li>
    </ul>
    <button class="logout-btn" type="button" >Log Out</button>
</div>
);
}
export default Sidebar;