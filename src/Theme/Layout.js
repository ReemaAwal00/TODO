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
      {/* <Main/> */}
     
       
          <Outlet />
      
     
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;