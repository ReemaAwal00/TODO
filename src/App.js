import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Checklist.css';
import './output.css';
import Layout from './Theme/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import AddTask from "./pages/AddTask";
import Main from "./pages/Main";
import Task from "./pages/Task";
import Login from "./pages/Auth/Login";
import Scheduled from "./pages/Scheduled";
import Myprofile from "./pages/Myprofile";
import Settings from "./pages/Settings";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from "./pages/landing/Landing";


function App() {
  return (
    <div>
 
<BrowserRouter>
  <Routes>
  <Route path="/" element={<Landing />} >

    {/* Route for rendering Login component */}
    </Route>

    {/* Route for rendering Layout component and its nested routes */}
    <Route path="/Login" element={<Login />} />

    <Route path="/pages/Main" element={<Layout />}>

      {/* Index route inside Layout component, renders Main component */}
      <Route index element={<Main />} />
      

      {/* Nested route for AddTask component */}
      <Route path="AddTask" element={<AddTask />} />
      <Route path="AddTask/:taskId?" element={<AddTask />} />
     
    

      <Route path="Task" element={<Task />} />
      <Route path="Scheduled" element={<Scheduled />} />
      <Route path="profile" element={<Myprofile />} />
      <Route path="settings" element={<Settings />} />
      

    </Route>
  </Routes>
</BrowserRouter>
<ToastContainer/>
        </div>
  );
}

export default App;