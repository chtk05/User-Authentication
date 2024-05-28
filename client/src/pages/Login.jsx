import React from "react";
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdPerson } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const notifySuccess = () => {
      toast.success("Login Success", {
        position: "top-center",
        duration: 3000,
      });
    };

    const notifyError = () => {
      toast.error("Wrong username or password", {
        id: "errorLogin",
        position: "top-center",
        duration: 2000,
        style: { background: "#f44336", color: "#ffffff" },
        iconTheme: {
          primary: "#ffffff",
          secondary: "#f44336",
        },
      });
    };

    try {
      await login(data.email, data.password);

      setTimeout(() => {
        notifySuccess();
        navigate("/profile");
      }, 500);
    } catch (err) {
      notifyError();
      console.log(err);
    }
  };
  return (
    <div className="border w-4/6 mx-auto flex flex-col-2 gap-5 p-6 mt-12 rounded-xl shadow-xl ">
      <div className="flex flex-col w-3/6">
        <h1 className="font-bold text-2xl text-left  w-full px-6 md:mx-auto md:w-5/6">
          Log in
        </h1>
        <form
          className="space-y-4 md:space-y-6 w-full p-6 md:mx-auto md:w-5/6"
          onSubmit={handleSubmit}
        >
          <div className="mt-2 md:mt-3 w-full ">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdPerson className="text-gray-500" />
              </div>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="text"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 md:mt-3 w-full">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoIosLock className="text-gray-500 " />
              </div>
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="text"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="mb-4 md:mb-5 bg-[#1363DF] hover:bg-[#DFF6FF] hover:text-[#1363DF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!data.email || isLoading}
            >
              {isLoading ? "Logged in..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col ">
        <img src="signup-image.jpg" alt="study" />
        <Link
          to="/register"
          className="text-center text-gray-600 underline cursor-pointer hover:text-[#1363DF]"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
