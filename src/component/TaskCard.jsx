import React from "react";
import { Link } from "react-router";

export default function TaskCard({ task }) {
  return (
    <Link
      to={`tasks/${task._id}`}
      className="bg-white shadow-sm py-5 px-4 rounded-md"
    >
      <h2 className="font-semibold text-2xl mb-2.5">{task.title}</h2>
      <p className="line-clamp-4 mb-4">{task.description}</p>
      {task.status == "todo" ? (
        <span className="py-1 px-4 bg-yellow-500 text-white rounded-md ">
          todo
        </span>
      ) : task.status == "in_progress" ? (
        <span className="py-1 px-4 bg-blue-500 text-white rounded-md ">
          In Progress
        </span>
      ) : task.status == "completed" ? (
        <span className="py-1 px-4 bg-green-500 text-white rounded-md ">
          Completed
        </span>
      ) : task.status == "cancelled" ? (
        <span className="py-1 px-4 bg-red-500 text-white rounded-md ">
          Cancelled
        </span>
      ) : null}
    </Link>
  );
}
