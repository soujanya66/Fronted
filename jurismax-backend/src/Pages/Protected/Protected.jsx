import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const login = false;
  return <>{login ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default Protected;
