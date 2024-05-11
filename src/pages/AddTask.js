import React, { useState } from "react";
import ViTextInput from "../components/ViTextInput";
import DatePicker from 'react-datepicker';

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
        <br />
        <ViTextInput 
        title="Enter task"
        name="username"/>
       
       <DatePicker
       className="date"
       selected={selectedDate}
       onChange={date => setSelectedDate(date)}
       />

     


       
        <form >
        <label>
          Select an option:
          <select >
            
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>

       
      </form>

      

    {/* </div> */}
</div>


     
       
    </div> 
    );
}

export default AddTask;