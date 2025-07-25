import React, { useState } from "react";
import Navbar from "./Navbar";
import AddTask from "./AddTask";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const [addTask, setAddTask] = useState(false);
  return (
    <div className="height">
      {addTask && <AddTask ChangeAddTask={setAddTask} />}
      <Toaster />
      <Navbar ChangeAddTask={setAddTask} />
      <main className="bg-gray-100 min-h-full">{children}</main>
    </div>
  );
}
