import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Theme/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import AddTask from "./pages/AddTask";
import Main from "./pages/Main";

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Layout />} >
          <Route index element={<Main/>} />
          <Route path="/pages/AddTask" element={ <AddTask/>} />

        </Route>
        </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
