import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border border-gray-200 shadow">
      <div className="flex justify-between align-center py-4 px-8">
        <Link to="/" className="font-semibold text-xl">
          Task Manager
        </Link>
        <nav className="flex gap-6">
          <Link to="/">Add Task</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Logout">Logout</Link>
        </nav>
      </div>
    </header>
  );
}
