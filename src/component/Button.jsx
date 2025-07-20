import React from "react";

export default function Button({ btn, name, loading = false }) {
  return (
    <button
      type={btn}
      className="py-2 px-5 text-center bg-blue-500 text-white w-full rounded-md uppercase font-medium cursor-pointer"
    >
      {loading ? "Loading..." : name}
    </button>
  );
}
