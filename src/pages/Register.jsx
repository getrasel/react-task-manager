import React from "react";
import { Link } from "react-router";
import Input from "../component/input";
import Button from "../component/button";
import Navbar from "../component/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="bg-slate-300 w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-md p-8 w-md rounded-lg">
          <h1 className="text-center text-2xl font-semibold uppercase pb-2">
            Register
          </h1>
          <form action="">
            <div className="space-y-3">
              <Input type="text" label="Name" />
              <Input type="email" label="Email Address" />
              <Input type="password" label="Password" />
              <Input type="confirm password" label="Confirm Password" />
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-1.5 accent-blue-500 " />I
                  agree to the terms and conditions
                </label>
              </div>
              <Button btn="submit" name="Register" />
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
