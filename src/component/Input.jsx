import React from "react";

export default function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block font-semibold text-gray-600 mb-1">{label}</label>
      <div className="w-full ">
        <input
          type={type}
          placeholder={label}
          className=" py-1.5 px-3 outline-none w-full focus:border-blue-400 border-slate-300 border rounded-sm"
        />
      </div>
    </div>
  );
}
