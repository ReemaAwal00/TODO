import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Theme/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import AddTask from "./pages/AddTask";
import Main from "./pages/Main";
import Login from "./pages/Auth/Login";
import Myprofile from "./pages/Myprofile";
import Task from "./pages/Task";
import Settings from "./pages/Settings";
import Scheduled from "./pages/Scheduled";



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

      <Route path="Myprofile" element={<Myprofile />}/>
      <Route path="Task" element={<Task />}/>
      <Route path="Scheduled" element={<Scheduled />}/>
      <Route path="Settings" element={<Settings />}/>

    </Route>
  </Routes>
</BrowserRouter>

        </div>
  );
}

export default App;