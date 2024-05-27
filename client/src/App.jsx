import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <React.Fragment>
      <Toaster position="top-center" toastOptions={{ duration: 2500 }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
