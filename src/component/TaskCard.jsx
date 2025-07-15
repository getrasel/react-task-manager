import React from "react";

export default function TaskCard() {
  return (
    <div className="bg-white shadow-sm py-5 px-4 rounded-md">
      <h2 className="font-semibold text-2xl mb-2.5">This is Task Card</h2>
      <p className="line-clamp-4 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure
        error cupiditate ut nesciunt, tenetur exercitationem eveniet? Placeat id
        consequatur necessitatibus! Possimus, nemo porro saepe dolore molestias
        ullam alias ad.
      </p>
      <span className="py-1 px-4 bg-blue-500 text-white rounded-md ">
        Task Status
      </span>
    </div>
  );
}
