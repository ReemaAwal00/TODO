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
            <li ><Link to="/pages/Main">Dashboard</Link> </li>
            <li> <Link to="Task">Today's Tasks</Link> </li>
            <li ><Link to ="Scheduled">Scheduled Tasks</Link></li>
            <li ><Link to ="Myprofile">My profile</Link></li>
           <li> <Link to="Settings">Settings</Link></li>
        </ul>
        <button class="logout-btn" type="button"   onClick={logout}>Log Out</button>
    </div>
    );
}
export default Sidebar;
