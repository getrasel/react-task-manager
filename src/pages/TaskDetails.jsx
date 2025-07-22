import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import axios from "axios";
import { useParams } from "react-router";

export default function TaskDetails() {
  const params = useParams();
  const taskId = params.id;
  const [gettasks, setGetasks] = useState({});

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

  useEffect(() => {
    handleTaskId();
  }, []);

  return (
    <>
      <Layout>
        <div className="px-8 py-4">
          <h1 className="font-semibold text-2xl mb-2.5">{gettasks.title}</h1>
          <p className="line-clamp-4 mb-4">{gettasks.description}</p>
          {gettasks.status == "todo" ? (
            <span className="py-1 px-4 bg-yellow-500 text-white rounded-md ">
              todo
            </span>
          ) : gettasks.status == "in_progress" ? (
            <span className="py-1 px-4 bg-blue-500 text-white rounded-md ">
              In Progress
            </span>
          ) : gettasks.status == "completed" ? (
            <span className="py-1 px-4 bg-green-500 text-white rounded-md ">
              Completed
            </span>
          ) : gettasks.canselled ? (
            <span className="py-1 px-4 bg-red-500 text-white rounded-md ">
              Cancelled
            </span>
          ) : null}
        </div>
      </Layout>
    </>
  );
}
