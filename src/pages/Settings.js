import React from 'react';
import { FaTasks } from 'react-icons/fa';

const Settings = () => {
    return (
        <div>
            <div className="about-us">
      <h1>Welcome to Listful!</h1>
      <p>Listful is a simple and intuitive todo list app designed to help you organize your tasks efficiently. Whether you're managing your daily to-dos or planning a project, Listful has you covered.</p>
      
      <h2>Key Features:</h2>
      <ul>
        <li><strong>Easy Task Management:</strong> Add, edit, and delete tasks with ease.</li>
        <li><strong>Priority Levels:</strong> Set priority levels to focus on important tasks.</li>
        <li><strong>Due Dates:</strong> Set due dates to stay on track and meet deadlines.</li>
        <li><strong>Simple and Clean Interface:</strong> Focus on your tasks without distractions.</li>
      </ul>

      <p>Ready to get organized? Start using Listful today!</p>
      
      <FaTasks size={50} className="about-icon" />
    </div>
        </div>
    );
}

export default Settings;
