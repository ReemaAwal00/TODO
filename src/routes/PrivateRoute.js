
import React, {useState} from "react";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({component: Component, authenticatedm, ...rest}) =>{
  const isLogin =localStorage.getItem('isLogin');
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin === '1' ? true : false);
  return isAuthenticated ? <Component {...rest} /> :<Navigate to= "/main" replace/>;
};

export default PrivateRoute;