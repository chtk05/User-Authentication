import React from "react";
import { useState } from "react";
import useRegisterUser from "../hook/useRegisterUser";
import toast, { Toaster } from "react-hot-toast";
import { MdPerson, MdEmail } from "react-icons/md";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    quote: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const isFormIncomplete = (userData) => {
    return (
      !userData.name || !userData.email || !userData.password || !userData.quote
    );
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await useRegisterUser(userData);
    } catch (error) {
      console.error("Error during registration process:", error);
    } finally {
      setIsLoading(false);
      setUserData({
        name: "",
        email: "",
        password: "",
        quote: "",
      });
    }
  };
  return (
    <div className="border w-4/6 mx-auto flex flex-col-2 gap-5 p-6 mt-12 rounded-xl shadow-xl ">
      <div className="flex flex-col ml-10 mt-16">
        <img src="signin-image.jpg" alt="study" />
        <Link
          to="/login"
          className="text-center text-gray-600 underline cursor-pointer hover:text-[#1363DF] mt-4"
        >
          I am already member
        </Link>
      </div>
      <div className="flex flex-col w-4/6">
        <h1 className="font-bold text-2xl text-left  w-full px-6 md:mx-auto md:w-5/6">
          Sign Up
        </h1>
        <form
          className="space-y-4 md:space-y-4 w-full p-4 md:mx-auto md:w-5/6"
          onSubmit={handleRegister}
        >
          <div className="mt-2 md:mt-2 w-full ">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdPerson className="text-gray-500" />
              </div>
              <input
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 md:mt-2 w-full ">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="text-gray-500" />
              </div>
              <input
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                type="text"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 md:mt-2 w-full">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoIosLock className="text-gray-500 " />
              </div>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 md:mt-2 w-full ">
            <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
              Quote
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BsFillChatSquareQuoteFill className="text-gray-500" />
              </div>
              <input
                value={userData.quote}
                onChange={(e) =>
                  setUserData({ ...userData, quote: e.target.value })
                }
                type="text"
                name="quote"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Quote"
              />
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <button
              className="mb-4 md:mb-5 bg-[#1363DF] hover:bg-[#DFF6FF] hover:text-[#1363DF] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isFormIncomplete(userData) || isLoading}
            >
              {isLoading ? "Sybmitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
