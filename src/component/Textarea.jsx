import React from "react";

export default function Textarea({ label, inputName, value, onChange }) {
  return (
    <>
      <label className="block font-medium text-gray-700 mb-0.5">{label}</label>
      <textarea
        className="py-1.5 px-3 outline-none w-full focus:border-blue-400 border-slate-300 border rounded-sm resize-none"
        rows={4}
        placeholder={label}
        name={inputName}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}
