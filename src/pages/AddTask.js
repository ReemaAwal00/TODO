import React, { useState } from "react";


const AddTask = () => {
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
    <h1>Hello</h1>
</div>

/* <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Todo"
          onChange={inputDataOnChange}
          value={inputData}
        />
        <button onClick={addTodo}>+</button>

        <ol>
          {myTodos.map((value, index) => (
            <ListData
              key={index}
              itemData={value}
              id={index}
              onSelect={deleteItem}
            />
          ))}
        </ol>
      </div>
    </div> */
    );
}

export default AddTask;