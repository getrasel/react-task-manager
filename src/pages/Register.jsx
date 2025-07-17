import React, { useState } from "react";
import { Link } from "react-router";
import Input from "../component/input";
import Button from "../component/button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const [error, setError] = useState([]);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
    };
    axios
      .post("https://task-manager64.up.railway.app/api/v1/auth/register", data)
      .then((res) => {
        toast.success("Login Successfully Done, Please Login");
        setError([]);
      })
      .catch((err) => {
        console.log(err);
        if (err.status == 400) {
          setError(err.response.data.message);
        } else {
          setError(err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-md p-8 w-md rounded-lg">
          <h1 className="text-center text-2xl font-semibold uppercase pb-2">
            Register
          </h1>
          <Toaster />
          <form onSubmit={handleFormSubmit}>
            <div className="space-y-2">
              {error.map((value, index) => {
                return (
                  <p
                    key={index}
                    className="bg-red-200 text-red-700 rounded px-2 text-sm py-1"
                  >
                    {value}
                  </p>
                );
              })}
            </div>
            <div className="space-y-3">
              <Input type="text" label="Name" inputName="name" />
              <Input type="email" label="Email Address" inputName="email" />
              <Input type="password" label="Password" inputName="password" />
              <Input
                type="password"
                label="Confirm Password"
                inputName="confirm_password"
              />
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-1.5 accent-blue-500 " />I
                  agree to the terms and conditions
                </label>
              </div>
              <Button name="Register" />
              <p>
                I already have an account?
                <Link to="/login" className="text-blue-600 ml-1">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
