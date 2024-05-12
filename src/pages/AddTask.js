import React, { useState } from "react";
import ViTextInput from "../components/ViTextInput";
import SelectLabel from "../components/SelectLabel";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../service/api-service";

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    date: null, // Use null for date initially
    priority: "",
  });

  const options = [
    { value: '1', label: 'High Priority' },
    { value: '2', label: 'Medium Priority' },
    { value: '3', label: 'Low Priority' },
  ]; 
  // yei reuse huncha sabai CRUD ma

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  
const [errorMsg, setErrMsg] = useState({
  name: "",
  date: "",
  priority: "",
});

  const saveForm = () => {
    if (validateForm()) {
      const uuid = uuidv4();
      const item = { ...user, id: uuid, date: selectedDate }; // Include selectedDate
      addUser(item) //yesko thau ma DisplayTask, Delete, Update matra rakhne ho aba
      // ahh tara Update ma chai sir ko way ma ali confusing cha, Ani timro project ma TODAY, wala gpt lai sodhnu parhca ani sakkyo
        .then(() => {
          console.log("User saved");
          navigate('/pages/Main');
        })
        .catch((err) => {
          console.log(err);
          alert("SERVER ERROR");
        });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const err = { name: "", date: "", priority: "" };

    if (user.name === '') {
      err.name = 'Name is required';
      isValid = false;
    }

    if (!selectedDate) {
      err.date = 'Date is required';
      isValid = false;
    }

    if (user.priority === '') {
      err.priority = 'Priority is required';
      isValid = false;
    }

    setUser({ ...user, date: selectedDate }); // Update user state with selected date
    return isValid;
  };

  return (
    <div>
      <div className="main_div">
        <br />
        <h1>Add new task</h1>
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
          />

          <SelectLabel
            title="Select a Priority:"
            name="priority"
            options={options}
            value={user.priority}
            handleInputChange={handleInputChange}
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
