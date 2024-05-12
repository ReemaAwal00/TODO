const Sidebar =() =>{
    const navigate = useNavigate();
  const logout =( ) => {
   
    localStorage.removeItem('isLogin')
    navigate('/');
  }

    return(
        <div class="sidebar">
        <ul>
            <a href="#"><li > Dashboard</li></a>
            <a href="Alltask.html"><li> All Tasks</li></a>
            <a href="#"><li > Scheduled Tasks</li></a>
            <a href=""><li > My profile</li></a>
           <a href=""> <li> Settings</li></a>
        </ul>
        <button class="logout-btn" type="button"   onClick={logout}>Log Out</button>
    </div>
    );
}
export default Sidebar;
