import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient px-5">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <img src="logo2.png" alt="Ecomate Logo" className="w-48 mb-4" />
            <h1 className="text-white text-xl font-semibold">Sign Up</h1>
          </div>
          <form className="space-y-6">
            <div>
              <label className="text-white text-sm">Name</label>
              <input
                type="name"
                id="name"
                className="w-full mt-1 p-2 font-normal bg-transparent border-b border-white text-white focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="text-white text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 font-normal bg-transparent border-b border-white text-white focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="text-white text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-1 p-2 font-normal bg-transparent border-b border-white text-white focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label className="text-white text-sm" htmlFor="password">
                Confirm Password
              </label>
              <input
                type="confirm_password"
                id="confirm_password"
                className="w-full mt-1 p-2 font-normal bg-transparent border-b border-white text-white focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-white">
                Forgot password
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-[#155527] font-semibold rounded mt-4"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-center text-white mt-6">
            Already have account?{" "}
            <NavLink to={"/login"} className="underline font-semibold">
              Login here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
