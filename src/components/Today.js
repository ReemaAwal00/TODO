import React, { useState, useEffect } from "react";
import { TodayTasks, deleteTask } from "../service/api-service";
import '../Checklist.css';
import { confirm } from "../utils/notification";
import { Link } from "react-router-dom";
import { addUser,getTaskById, updateTask } from "../service/api-service";

const Today = () => {
    
    const [tasks, setTasks] = useState([]);
    const [streak, setStreak] = useState(0); // State to track the streak count
    const [streakDate, setStreakDate] = useState(""); // State to track the date of the streak

    useEffect(() => {
        loadTasks();
        loadStreakFromLocalStorage(); // Load streak data from local storage on component mount
    }, []); 

    useEffect(() => {
        saveStreakToLocalStorage(); // Save streak data to local storage whenever streak or streakDate changes
    }, [streak, streakDate]);

    const loadTasks = async () => {
        try {
            const data = await TodayTasks();
            setTasks(data);
        } catch (error) {
            alert("API server error");
            console.log(error);
        }
    };

    const loadStreakFromLocalStorage = () => {
        const savedStreak = localStorage.getItem("streak");
        const savedStreakDate = localStorage.getItem("streakDate");

        if (savedStreak && savedStreakDate) {
            setStreak(parseInt(savedStreak, 10));
            setStreakDate(savedStreakDate);
        }
    };

    const saveStreakToLocalStorage = () => {
        localStorage.setItem("streak", streak.toString());
        localStorage.setItem("streakDate", streakDate);
    };


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

                // Update streak if the task is completed on the same day
                const today = new Date().toISOString().split('T')[0];
                if (streakDate === today) {
                    setStreak(prevStreak => prevStreak + 1);
                } else {
                    setStreak(1); // Reset streak for a new day
                    setStreakDate(today);
                }

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
               <div className="streak-info">
                <br></br>
                <h1>🔥 Streak: {streak} </h1> <br></br>({streak} task{streak !== 1 ? 's' : ''} completed today)
            </div>
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
                    <Link to={`./AddTask/${task.id}`}>
                        <p className="taskBox1">📝</p>
                    </Link>
                        <p className="taskBox1" onClick={() => handleDeleteTask(task.id)} >❌</p>
                </div>
            ))}
        </div>
    );
};

export default Today;


