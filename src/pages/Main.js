import { Link } from "react-router-dom";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from 'react-datepicker';

const Main =() =>{
//   const [startDate, setStartDate] = useState(new Date());

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
            {/* <DatePicker
      className="date"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />   */}
        </div>
    </div>
        </div>
    );
}
export default Main;