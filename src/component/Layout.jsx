import React, { useState } from "react";
import Navbar from "./Navbar";
import AddTask from "./AddTask";

export default function Layout({ children }) {
  const [addTask, setAddTask] = useState(false);
  return (
    <div className="height">
      {addTask && <AddTask TaskAdd={setAddTask} />}

      <Navbar TaskAddNav={setAddTask} />
      <main className="bg-gray-100 min-h-full">{children}</main>
    </div>
  );
}
