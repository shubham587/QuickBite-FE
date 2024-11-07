import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import "../../styles/login.css";

const SignUp = () => {
  return (
    <div className="background">
      <div className="flex items-center justify-center min-h-screen relative">
        <form className="bg-gray-200 opacity-80 p-8 rounded-3xl shadow-lg w-full max-w-sm">
          <div className="mb-6">
            <label
              className="block text-black text-sm font-semibold mb-2 text-[25px]"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[25px]"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-semibold mb-2 text-[25px]"
              htmlFor="psnumber"
            >
              PS Number
            </label>
            <input
              id="username"
              type="text"
              className="w-[105%] p-[8px] rounded-[12px] text-[20px]"
              placeholder="Enter your PS Number"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-semibold mb-2 text-[25px]"
              htmlFor="email"
            >
              Mail ID
            </label>
            <input
              id="email"
              type="text"
              className="w-[105%] p-[8px] rounded-[12px] text-[20px]"
              placeholder="Enter your mail ID"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-semibold mb-2 text-[25px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-[105%] p-[8px] rounded-[12px] text-[20px]"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black text-sm font-semibold mb-2 text-[25px]"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="w-[105%] p-[8px] rounded-[12px] text-[20px]"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-[105%] p-[8px] rounded-[12px] text-[20px] bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;