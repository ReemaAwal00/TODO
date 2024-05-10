import { Link } from "react-router-dom";
const Main =() =>{
    return(
        <div>
              <div class="maincontainer">
        <div class="description">
            <h3>Organize & Manage your tasks  with <a href="">ListFull</a></h3>
            <br></br>
            <Link to="AddTask" className="gradient-button">Add Task</Link>
            
        </div>
        

        <div class="task">
            <h2>Today's Tasks</h2>
        </div>
    </div>
        </div>
    );
}
export default Main;
