import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "../pages/Main";
// import Footer from "./Footer";


const Layout = () => {
  return (
    <div>
     <Header />
      <Sidebar />
<<<<<<<<< Temporary merge branch 1
      <Outlet />

     <h1></h1>
       
          <Outlet />
      
     
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;