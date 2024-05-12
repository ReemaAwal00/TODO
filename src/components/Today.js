import React, { useState, useEffect } from "react";
import { TodayTasks, deleteTask } from "../service/api-service";
import '../Checklist.css';
import { confirm } from "../utils/notification";


const Today = () => {
    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        TodayTasks()
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

    const handleCheckboxChange = async (taskId) => {
        const selectedTask = tasks.find(task => task.id === taskId);

        if (!selectedTask) {
            return; // Task not found
        }

        const { isConfirmed } = await confirm("Congrats! You completed a task 😁", "Are you sure you want to delete it now?");

        if (isConfirmed) {
            try {
                await deleteTask(taskId); // Delete the task
                // Remove the task from the UI
                const updatedTasks = tasks.filter(task => task.id !== taskId);
                setTasks(updatedTasks);
                console.log("Task deleted successfully");
            } catch (error) {
                console.error("Error deleting task:", error);
                // Handle deletion error (e.g., display error message)
            }
        } else {
            // User cancelled deletion
            console.log("Deletion cancelled");
        }
    };

    

    return (
        <div className="inbox">
            {tasks.map(task => (
                <div key={task.id} className="item">
                    <input
                        type="checkbox"
                        className="box"
                        checked={task.selected}
                        onChange={() => handleCheckboxChange(task.id)}
                    />
                    <p className="taskBox">{task.name}</p>
                    <p className="taskBox">{task.date.split('T')[0]}</p>
                    <p className="taskBox1">{getPriorityText(task.priority)}</p>
                </div>
            ))}
        </div>
    );
};

export default Today;