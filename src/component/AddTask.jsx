import React from "react";
import { MdOutlineClose } from "react-icons/md";
import Input from "./input";
import Textarea from "./Textarea";
import Button from "./button";

export default function AddTask({ TaskAdd }) {
  return (
    <>
      <div
        className="w-full h-screen bg-black/20 fixed z-20 backdrop-blur-[6px]"
        onClick={() => TaskAdd(false)}
      ></div>
      <div className="w-md bg-white fixed z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md">
        <h2 className="text-2xl font-semibold text-center border-b-1 border-slate-400 p-4 pb-3">
          Add Task
        </h2>
        <div className="absolute -top-4 -right-4">
          <MdOutlineClose
            className="text-4xl bg-black/80 text-white rounded-md cursor-pointer"
            onClick={() => TaskAdd(false)}
          />
        </div>
        <div className="p-8">
          <form action="" className="space-y-5">
            <Input type="text" label="Task Title" />
            <Textarea label="Task Description" />
            <Button name="Add Task" />
          </form>
        </div>
      </div>
    </>
  );
}
