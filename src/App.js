import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Checklist.css';

import Layout from './Theme/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import AddTask from "./pages/AddTask";
import Main from "./pages/Main";
import Task from "./pages/Task";
import Login from "./pages/Auth/Login";


function App() {
  return (
    <div>
 
<BrowserRouter>
  <Routes>
    {/* Route for rendering Login component */}
    <Route path="/" element={<Login />} />

    {/* Route for rendering Layout component and its nested routes */}
    <Route path="/pages/Main" element={<Layout />}>
      {/* Index route inside Layout component, renders Main component */}
      <Route index element={<Main />} />

      {/* Nested route for AddTask component */}
      <Route path="AddTask" element={<AddTask />} />
      <Route path="AddTask/:taskId?" element={<AddTask />} />

      <Route path="Task" element={<Task />} />

    </Route>
  </Routes>
</BrowserRouter>

        </div>
  );
}

export default App;