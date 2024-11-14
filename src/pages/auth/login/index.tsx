import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient px-5">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img src="logo2.png" alt="Ecomate Logo" className="w-48 mb-4" />
          <h1 className="text-white text-xl font-semibold">
            Login to your account
          </h1>
        </div>
        <form className="space-y-6">
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
          <div className="text-right">
            <a href="#" className="text-sm text-white">
              Forgot password
            </a>
          </div>
          <NavLink to={"/"}>
            <button className="w-full py-2 bg-white text-[#155527] font-semibold rounded mt-4">
              Sign In
            </button>
          </NavLink>
        </form>
        <div className="flex items-center justify-between my-6">
          <hr className="w-full border-gray-400" />
          <span className="text-white px-4">or</span>
          <hr className="w-full border-gray-400" />
        </div>
        <NavLink to={"/register"}>
          <button
            type="button"
            className="w-full py-2 border border-white text-white font-semibold rounded"
          >
            Sign Up
          </button>
        </NavLink>

        <p className="text-xs text-center text-white mt-6">
          By continuing you agree to our{" "}
          <a href="#" className="underline font-semibold">
            Terms & Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
