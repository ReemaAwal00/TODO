import React, { useState, useEffect } from "react";
import { getUpcomingTask2 } from "../service/api-service";
import '../Checklist.css';


const Forthcoming = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getUpcomingTask2()
            .then(data => {
                console.log("API Response:", data); // Log API response for debugging
                setTasks(data);
            })
            .catch(err => {
                alert("API server error");
                console.log(err);
            });
    }, []);

    const getPriorityText = (priority) => {
        switch (priority) {
            case "1":
                return "High";
            case "2":
                return "Medium";
            case "3":
                return "Low";
            default:
                return "Unknown";
        }
    };

   



    return (
  
            
        <div className="inbox">
            {tasks.map(task => (
                <div key={task.id} className="item">
                   
                    <p className="taskBox">{task.name}</p>
                    <p className="taskBox">{task.date.split('T')[0]}</p>

                </div>
            ))}
        </div>
    );
};

export default Forthcoming;
