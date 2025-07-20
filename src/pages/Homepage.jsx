import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import TaskCard from "../component/TaskCard";
import axios from "axios";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  const handleshowTask = () => {
    axios
      .get("https://task-manager64.up.railway.app/api/v1/tasks", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleshowTask();
  }, []);
  return (
    <Layout>
      <div className="py-8 px-8">
        <div className="grid grid-cols-4 gap-4">
          {tasks.map((value, index) => {
            return <TaskCard key={index} task={value} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
