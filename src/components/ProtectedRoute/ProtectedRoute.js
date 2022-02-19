import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  return (JSON.parse(localStorage.getItem('loggedIn')) === true ? <Outlet /> : <Navigate to="/" replace/>)
};

export default ProtectedRoute;

