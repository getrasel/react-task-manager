import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import Input from "./input";
import Textarea from "./Textarea";
import Button from "./button";

export default function Update({ updateTask, UpdateAllField, taskId }) {
  const [title, setTitle] = useState(UpdateAllField.title || "");
  const [description, setDescription] = useState(
    UpdateAllField.description || ""
  );
  const [loading, setLoading] = useState(false);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    axios
      .patch(
        `https://task-manager64.up.railway.app/api/v1/tasks/${taskId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        updateTask(false);
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div
        className="bg-black/20 fixed h-screen w-full z-20 left-0 top-0 backdrop-blur-[2px]"
        onClick={() => updateTask(false)}
      ></div>
      <div className="fixed bg-white rounded z-30 w-xl py-4 px-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-xl font-semibold text-center">Update Task</h2>
        <div className="absolute top-2 right-2 bg-black rounded">
          <MdOutlineClose
            className="text-3xl text-white cursor-pointer"
            onClick={() => updateTask(false)}
          />
        </div>
        <div className="p-8">
          <form className="space-y-5" onSubmit={handleUpdateTask}>
            <Input
              type="text"
              label="Task Title"
              inputName="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Task Description"
              inputName="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button name="Update Task" loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
}
