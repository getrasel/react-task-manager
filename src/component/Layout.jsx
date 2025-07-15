import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="height">
      <Navbar />
      <main className="bg-gray-100 min-h-full">{children}</main>
    </div>
  );
}
