import axios from 'axios';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("playerInfo"));
  if(user) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`; 
  }

    return( user ? <Outlet/> : <Navigate to="/login" /> )
};

export default ProtectedRoutes;
