const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utilities/auth");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, quote } = req.body;
    if (!name) return res.json({ error: "Name is required" });
    if (!password || password.length < 6)
      return res.json({
        error: "Password is required and should be atleast 6 character",
      });
    const existEmail = await User.findOne({ email });
    if (existEmail) return res.json({ error: "This email already registred" });
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      quote,
    });
    return res.json(user).end();
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email: email });
    console.log(`user`, user);
    if (!user) {
      return res.status(401).json({
        error: "No user found",
      });
    }

    const matchPassword = await comparePassword(password, user.password);
    if (matchPassword) {
      jwt.sign(
        { email: user.email, name: user.firstName, lastName: user.lastName },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!matchPassword) {
      return res.status(401).json({
        error: "Password do not matched!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An unexpected error occurred" });
  }
};

const getProfile = (req, res) => {
  if (!req.user) {
    return res.json({ error: "User not found" });
  }
  res.status(200).json({
    message: "User authenticated successfully",
    user: req.user,
  });
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.json("Success");
};

module.exports = { registerUser, loginUser, getProfile, logout };
