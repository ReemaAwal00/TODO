import React, { useState, useEffect } from "react";
import { displayAllTasks, deleteTask, searchByTaskPriority } from "../service/api-service";
import '../Checklist.css';
import ViTextInput from "../components/ViTextInput";

import { confirm } from "../utils/notification";
import { Link } from "react-router-dom";


const Checklist = () => {
    const [tasks, setTasks] = useState([]);
    const [searchTask, setSearchTask] = useState('');

    const handleSearchTask = (e) => {
        setSearchTask(e.target.value);
        searchByTaskPriority(e.target.value).then((data) => {
          setTasks(data);
        }).catch((err) => {
          alert("API server error");
          console.log(err);
        });
      }

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
        const nepaliOptions = {
            timeZone: 'Asia/Kathmandu',
            weekday: 'long', // Full name of the day of the week
            year: 'numeric',
            month: 'long', // Full name of the month
            day: 'numeric'
        };
        const formattedDate = date.toLocaleDateString('en-NP', nepaliOptions);
        return formattedDate;
    };

    const handleDeleteTask = async (taskId) => {
        const { isConfirmed } = await confirm("Confirm Deletion", "Are you sure you want to delete this task?");

        if (isConfirmed) {
            try {
                await deleteTask(taskId); // Delete the task
                const updatedTasks = tasks.filter(task => task.id !== taskId);
                setTasks(updatedTasks);
                console.log("Task deleted successfully");
            } catch (error) {
                console.error("Error deleting task:", error);
                // Handle deletion error
            }
        }
    };

    return (
        <div className="inbox">

            <ViTextInput
            name="username"
            placeholder="🔎 Search by Priority (1 for High, 2 for Mid & 3 for Low)"
            value={searchTask}
            handleInputChange={handleSearchTask}
            className="search"
            />

            {tasks.map((task, index) => (
                <div key={index} className="item">
                    <input type="checkbox" onClick={() => handleDeleteTask(task.id)} className="box" />
                    <p className="taskBox">{task.name}</p>
                    <p className="taskBox">{formatDate(task.date)}</p>
                    <p className="taskBox1">{getPriorityText(task.priority)}</p>
                    <Link to={`../AddTask/${task.id}`}>
                    <p className="taskBox1">📝</p>
                    </Link>
                 

                </div>
            ))}
        </div>
    );
};

export default Checklist;
