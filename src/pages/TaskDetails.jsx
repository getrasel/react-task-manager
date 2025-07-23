import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";

export default function TaskDetails() {
  const params = useParams();
  const taskId = params.id;
  const [gettasks, setGetasks] = useState({});
  const navigate = useNavigate();

  const handleTaskId = () => {
    axios
      .get(`https://task-manager64.up.railway.app/api/v1/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setGetasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteTask = () => {
    axios
      .delete(`https://task-manager64.up.railway.app/api/v1/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success("Task Delete Successfully Done");
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
        console.log(err);
      });
  };

  const handleTaskStatus = (status) => {
    axios.patch(
      `https://task-manager64.up.railway.app/api/v1/tasks/${taskId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  useEffect(() => {
    handleTaskId();
  }, []);

  return (
    <>
      <Layout>
        <div className="px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-2xl mb-2.5">{gettasks.title}</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer font-semibold"
              onClick={handleDeleteTask}
            >
              Delete
            </button>
          </div>
          <p className="line-clamp-4 mb-4">{gettasks.description}</p>
          <select
            className="border border-gray-300 rounded px-3 py-2 mr-2 outline-none"
            onChange={(e) => handleTaskStatus(e.target.value)}
          >
            <option value="todo" selected={gettasks.status === "todo"}>
              Todo
            </option>
            <option
              value="in_progress"
              selected={gettasks.status === "in_progress"}
            >
              In progress
            </option>
            <option
              value="completed"
              selected={gettasks.status === "completed"}
            >
              Completed
            </option>
            <option
              value="cancelled"
              selected={gettasks.status === "cancelled"}
            >
              Cancelled
            </option>
          </select>
        </div>
      </Layout>
    </>
  );
}
