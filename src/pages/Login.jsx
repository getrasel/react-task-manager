import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Input from "../component/input";
import Button from "../component/button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      // mdraselahmed064@gmail.com
      password: e.target.password.value,
      //pass: 'FnodV05!K:2_0H>j
    };
    axios
      .post("https://task-manager64.up.railway.app/api/v1/auth/login", data)
      .then((res) => {
        toast.success("Login Successfully Done");
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((err) => {
        if (err.status === 400) {
          toast.error("Bad request, validation errors");
        } else {
          toast.error(err.response.data.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="bg-slate-300 w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-md p-8 w-md rounded-lg">
          <h1 className="text-center text-2xl font-semibold uppercase pb-2">
            Login
          </h1>
          <Toaster />
          <form onSubmit={handleLogin}>
            <div className="space-y-3">
              <Input type="email" label="Email Address" inputName="email" />
              <Input type="password" label="Password" inputName="password" />
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-1.5 accent-blue-500 " />
                  Remember me
                </label>
              </div>
              <Button btn="submit" name="Login" loading={loading} />
              <p>
                Don't have account?
                <Link to="/register" className="text-blue-600 ml-1">
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
