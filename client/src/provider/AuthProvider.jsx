import React from "react";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used");
  return context;
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const loginBody = { email, password };
    console.log(loginBody);
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/login`,
        loginBody
      );

      if (res.status === 200) {
        console.log(res.data);
        setIsLoggedIn(true);
        setUserData(res.data);
      } else {
        throw new Error(res.data.error || "Login failed");
      }
    } catch (err) {
      throw new Error("invalid username or password");
    }
  };
  const logout = async () => {
    try {
      await axios.post("http://localhost:8080/logout");
      setUserData(null);
      setIsLoggedIn(false);
      navigate("/");
    } catch (err) {
      console.log("Logout failed:", err);
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, userData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
