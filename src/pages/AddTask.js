import React, { useState } from "react";
import ViTextInput from "../components/ViTextInput";
import SelectLabel from "../components/SelectLabel";
import DatePicker from 'react-datepicker';

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { userId } = useParams();
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
      addUser(item)
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
