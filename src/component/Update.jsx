import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";
import Input from "./input";
import Textarea from "./Textarea";
import Button from "./button";
import { toast } from "react-hot-toast";

export default function Update({ updateTask, taskId, taskData }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (taskData) {
      setTitle(taskData.title || "");
      setDescription(taskData.description || "");
    }
  }, [taskData]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .patch(
        `https://task-manager64.up.railway.app/api/v1/tasks/${taskId}`,
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        toast.success("Task Update Successfully");
        updateTask(false);
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Something Went Wrong");
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
