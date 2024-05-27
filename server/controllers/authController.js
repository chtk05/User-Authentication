const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utilities/auth");

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, quote } = req.body;
    if (!firstName) return res.json({ error: "First Name is required" });
    if (!lastName) return res.json({ error: "Last Name is required" });
    if (!password || password.length < 6)
      return res.json({
        error: "Password is required and should be atleast 6 character",
      });
    const existEmail = await User.findOne({ email });
    if (existEmail) return res.json({ error: "This email already registred" });
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      firstName,
      lastName,
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
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
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
      return res.json({
        error: "Password do not matched!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      return res.json(user);
    });
  } else {
    return res.json(null).end();
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.json("Success");
};

module.exports = { registerUser, loginUser, getProfile, logout };
