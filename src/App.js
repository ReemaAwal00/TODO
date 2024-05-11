import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Theme/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import AddTask from "./pages/AddTask";
import Main from "./pages/Main";
<<<<<<<<< Temporary merge branch 1
=========
import Login from "./pages/Auth/Login";

>>>>>>>>> Temporary merge branch 2

function App() {
  return (
    <div>
<<<<<<<<< Temporary merge branch 1
    <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Layout />} >
          <Route index element={<Main/>} />
          <Route path="/pages/AddTask" element={ <AddTask/>} />
=========
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
    </Route>
  </Routes>
</BrowserRouter>

        </div>
  );
}

export default App;