import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "../pages/Main";


const Layout = () => {
  return (
    <div>
     <Header />
      <Sidebar />
      <Outlet />
     
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;