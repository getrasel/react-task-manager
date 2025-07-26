import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState({});

  const handleUserProfile = () => {
    axios
      .get(`https://task-manager64.up.railway.app/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleUserProfile();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex h-screen bg-white mt-[-60px]">
          <div className="w-full flex-1 bg-emerald-600 p-8 text-center relative">
            <div className="w-lg text-left ml-auto flex flex-col gap-4 absolute top-[50%] left-[50%] -translate-1/2">
              <h1 className="font-semibold text-4xl text-white">{user.name}</h1>
              <h4 className="text-white text-2xl">
                <span className="text-lg">Email: </span>
                <span>{user.email}</span>
              </h4>
              <h4 className="text-white text-2xl">
                <span className="text-lg">Profile Type: </span>
                <span>{user.role}</span>
              </h4>
              <h4 className="text-white text-2xl">
                <span className="text-lg">created at: </span>
                <span>{user.createdAt}</span>
              </h4>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute top-[50%] left-[50%] -translate-1/2">
              <img className="w-xs" src={user.avatar} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
