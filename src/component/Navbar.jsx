import React from "react";
import { Link, useNavigate } from "react-router";

export default function Navbar({ ChangeAddTask }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header className="sticky top-0 bg-white border border-gray-200 shadow z-10">
      <div className="flex justify-between align-center py-4 px-8">
        <Link to="/" className="font-semibold text-xl">
          Task Manager
        </Link>
        <nav className="flex gap-6">
          <Link to="/" onClick={() => ChangeAddTask(true)}>
            Add Task
          </Link>
          <Link to="/profile">Profile</Link>
          <a onClick={handleLogout} className="cursor-pointer">
            Logout
          </a>
        </nav>
      </div>
    </header>
  );
}
