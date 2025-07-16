import React from "react";
import { Link } from "react-router";
import Input from "../component/input";
import Button from "../component/button";

export default function LoginPage() {
  return (
    <>
      <div className="bg-slate-300 w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-md p-8 w-md rounded-lg">
          <h1 className="text-center text-2xl font-semibold uppercase pb-2">
            Login
          </h1>
          <form action="">
            <div className="space-y-3">
              <Input type="text" label="Name" />
              <Input type="email" label="Email Address" />
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-1.5 accent-blue-500 " />
                  Remember me
                </label>
              </div>
              <Button btn="submit" name="Login" />
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
