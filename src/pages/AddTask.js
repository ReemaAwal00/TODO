import React, { useState } from "react";
import ViTextInput from "../components/ViTextInput";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const AddTask = () => {
  const [selectedDate, setSelectedDate]= useState(null);


//     const [myTodos, setTodo] = useState([]);
//   const [inputData, setInputData] = useState("");

//   const addTodo = (event) => {
//     console.log("in addTodo function :", inputData);
//     if (inputData !== "") setTodo((oldData) => [...oldData, inputData]);
//     setInputData("");
//   };

//   const inputDataOnChange = (event) => {
//     setInputData(event.target.value);
//   };

//   const deleteItem = (id) => {
//     console.log(`Item deleted id ${id}`);
//     setTodo((prevData) => prevData.filter((_, index) => index !== id));
//   };

    return(
<div>
    
    <div className="main_div">
    {/* <div className="center_div"> */}
        <br />
        <h1>Add new task</h1>
      
        <ViTextInput 
        // className="text"
        title="Enter task"
        name="username"/>

        <br></br>
        
       <p>Pick date</p>
       <DatePicker
       placeholderText="Select Date"
       className="date"
       selected={selectedDate}
       onChange={date => setSelectedDate(date)}
       />

        <br></br>
        <br></br>
        <p>
          Select Priority </p>
          <select >
            
            <option value="option1">High Priority</option>
            <option value="option2">Medium Priority</option>
            <option value="option3">Low Priority</option>
          </select>
   

       <button className="add-button">Add</button>
      

      

    {/* </div> */}
</div>


     
       
    </div> 
    );
}

export default AddTask;