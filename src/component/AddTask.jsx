import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Input from "./input";
import Textarea from "./Textarea";
import Button from "./button";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddTask({ ChangeAddTask }) {
  const [loading, setLoading] = useState(false);
  const handleAddTask = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
    };
    axios
      .post("https://task-manager64.up.railway.app/api/v1/tasks", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        toast.success("Task Added Successfully Done");
        ChangeAddTask(false);
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
        setLoading(false);
      });
  };

  return (
    <>
      <div
        className="w-full h-screen bg-black/20 fixed z-20 backdrop-blur-[6px]"
        onClick={() => ChangeAddTask(false)}
      ></div>
      <div className="w-md bg-white fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
        <h2 className="text-2xl font-semibold text-center border-b-1 border-slate-400 p-4 pb-3">
          Add Task
        </h2>
        <div className="absolute -top-4 -right-4">
          <MdOutlineClose
            className="text-4xl bg-black/80 text-white rounded-md cursor-pointer"
            onClick={() => ChangeAddTask(false)}
          />
        </div>
        <div className="p-8">
          <form className="space-y-5" onSubmit={handleAddTask}>
            <Input type="text" label="Task Title" inputName="title" />
            <Textarea label="Task Description" inputName="description" />
            <Button name="Add Task" loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
}
