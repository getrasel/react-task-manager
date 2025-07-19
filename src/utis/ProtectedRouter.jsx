import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRouter() {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to={"/login"} />;
}
