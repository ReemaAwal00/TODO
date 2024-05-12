import { Link } from "react-router-dom";
const Sidebar =() =>{
    return(
        <div class="sidebar">
        <ul>
            <li ><Link to="">Dashboard</Link></li>
            <li><Link to="Task">All Tasks</Link></li>
            <a href="#"><li > Scheduled Tasks</li></a>
            <a href=""><li > My profile</li></a>
           <a href=""> <li> Settings</li></a>
        </ul>
        <button class="logout-btn" type="button" >Log Out</button>
    </div>
    );
}
export default Sidebar;
