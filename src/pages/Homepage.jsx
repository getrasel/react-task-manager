import React from "react";
import Layout from "../component/Layout";
import TaskCard from "../component/TaskCard";

export default function HomePage() {
  return (
    <Layout>
      <div className="py-8 px-8">
        <div className="grid grid-cols-4 gap-4">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </Layout>
  );
}
