import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ViTextInput from "../components/ViTextInput";
import SelectLabel from "../components/SelectLabel";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import { addUser, getTaskById, updateTask } from "../service/api-service";
import { success } from "../utils/notification";

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    date: null,
    priority: "",
  });

  const options = [
    { value: '1', label: 'High Priority' },
    { value: '2', label: 'Medium Priority' },
    { value: '3', label: 'Low Priority' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [errorMsg, setErrorMsg] = useState({
    name: "",
    date: "",
    priority: "",
  });

  useEffect(() => {
    if (taskId) {
      getTaskDetails(taskId);
    }
  }, [taskId]);

  const getTaskDetails = (taskId) => {
    getTaskById(taskId)
      .then((taskData) => {
        setUser(taskData);
        if (taskData.date) {
          setSelectedDate(new Date(taskData.date));
        }
      })
      .catch((err) => {
        console.log("Error fetching task:", err);
      });
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errorMsg };

    if (user.name.trim() === '') {
      updatedErrors.name = 'Name is required';
      isValid = false;
    } else {
      updatedErrors.name = '';
    }

    if (!selectedDate) {
      updatedErrors.date = 'Date is required';
      isValid = false;
    } else {
      updatedErrors.date = '';
    }

    if (user.priority.trim() === '') {
      updatedErrors.priority = 'Priority is required';
      isValid = false;
    } else {
      updatedErrors.priority = '';
    }

    setErrorMsg(updatedErrors);
    return isValid;
  };

  const saveForm = () => {
    if (validateForm()) {
      const formattedDate = selectedDate ? formatDateForNepal(selectedDate) : null;
      const updatedTask = { ...user, date: formattedDate };

      if (taskId) {
        // Update existing task
        updateTask(taskId, updatedTask)
          .then(() => {
            success(`Task: ${user.name} Updated!`);

            console.log("Task updated successfully");

            navigate('/pages/Main');
          })
          .catch((err) => {
            console.error("Error updating task:", err);
            alert("SERVER ERROR");
          });
      } else {
        // Add new task
        const newTask = { ...updatedTask, id: uuidv4() };
        addUser(newTask)
          .then(() => {
            success(`New Task: ${user.name} Saved!`);

            console.log("Task added successfully");
            navigate('/pages/Main');
          })
          .catch((err) => {
            console.error("Error adding task:", err);
            alert("SERVER ERROR");
          });
      }
    }
  };

  const formatDateForNepal = (date) => {
    const utcDate = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );

    const nepalOffsetMilliseconds = (5 * 60 + 45) * 60 * 1000;
    const localDateTime = utcDate + nepalOffsetMilliseconds;
    const localDate = new Date(localDateTime);
    const formattedDate = localDate.toISOString().split('T')[0] + 'T00:00:00';

    return formattedDate;
  };


  return (
    <div>
      <div className="main_div">
        <br />
        <h1>{taskId ? 'Edit Task' : 'Add Task'}</h1>
        <br />
        <form>
          <ViTextInput 
            title="Enter task"
            name="name"
            value={user.name}
            handleInputChange={handleInputChange}
            errMessage={errorMsg.name}
          />

          <DatePicker
            placeholderText="Select Date"
            className="date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            errMessage={errorMsg.date}
          />

          <SelectLabel
            title="Select a Priority:"
            placeholderText="High | Medium | Low"
            name="priority"
            options={options}
            value={user.priority || ""}
            handleInputChange={handleInputChange}
            errMessage={errorMsg.priority}
          />

          <div className="form-group">
            <button type="button" onClick={saveForm} className="btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;