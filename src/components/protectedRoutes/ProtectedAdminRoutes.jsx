import axios from 'axios';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdminRoutes = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if(user) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`; 
  }
    return( user ? <Outlet/> : <Navigate to="/admin-panel/login" /> )
};

export default ProtectedAdminRoutes;
