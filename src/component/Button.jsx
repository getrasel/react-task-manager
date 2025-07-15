import React from "react";

export default function Button({ btn, name }) {
  return (
    <button
      type={btn}
      className="py-2 px-5 text-center bg-blue-500 text-white w-full rounded-md uppercase font-medium cursor-pointer"
    >
      {name}
    </button>
  );
}
