import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

export default function RouterApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
