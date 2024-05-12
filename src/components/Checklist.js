import React, { useState, useEffect } from "react";
import { displayAllTasks } from "../service/api-service";
import '../Checklist.css';

const Checklist = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        displayAllTasks()
            .then(data => {
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

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
    };

    const getDayOfWeek = (dateStr) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const date = new Date(dateStr);
        const dayOfWeek = daysOfWeek[date.getDay()];
        return dayOfWeek;
    };

    return (
        <div className="inbox">
            {tasks.map((task, index) => (
                <div key={index} className="item">
                    <input type="checkbox" className="box" />
                    <p className="taskBox">{task.name}</p>
                    <p className="taskBox">{formatDate(task.date)} ({getDayOfWeek(task.date)})</p>
                    <p className="taskBox1">{getPriorityText(task.priority)}</p>
                </div>
            ))}
        </div>
    );
};

export default Checklist;
