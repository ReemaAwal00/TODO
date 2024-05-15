import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { notif } from '../utils/notification';
import { TodayTasks } from '../service/api-service';

const Notify = () => {
    const [tasks, setTasks] = useState([]);
    const [highPriorityCount, setHighPriorityCount] = useState(0);

    useEffect(() => {
        TodayTasks()
            .then(data => {
                console.log("API Response:", data); // Log API response for debugging
                setTasks(data);

                // Filter tasks to get only high-priority tasks
                const highPriorityTasks = data.filter(task => task.priority == "1");
                setHighPriorityCount(highPriorityTasks.length);

                // Call the notif function with the correct parameters
            })
            .catch(err => {
                alert("API server error");
                console.log(err);
            });
    }, []);

    return (
        <div className="notification-icon">
            <FaBell size={24} onClick={() => notif(`Today, you have ${highPriorityCount} high priority tasks.`, "See All Tasks")} />
            {highPriorityCount > 0 && <span className="badge">{highPriorityCount}</span>}
        </div>
    );
}

export default Notify;
