import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProtectedRouter from "./utis/ProtectedRouter";
import Profile from "./pages/Profile";
import TaskDetails from "./pages/TaskDetails";

export default function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<h1>404 error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
